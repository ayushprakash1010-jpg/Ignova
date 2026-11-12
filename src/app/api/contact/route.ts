import { COMPANY } from "@/lib/constants";
import { contactSchema } from "@/lib/contact-schema";

const MAX_BODY_BYTES = 16 * 1024;

function json(data: { error?: string; success?: boolean }, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ error: "Your message is too large. Please shorten it and try again." }, 413);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Please submit the form using the website." }, 415);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "We couldn't read your message. Please try again." }, 400);
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return json({ error: "Please check the form fields and try again." }, 400);
  }

  const submission = result.data;

  // Silently accept bot submissions caught by the honeypot without emailing them.
  if (submission.website) {
    return json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.IGNOVA_FORM_FROM || "onboarding@resend.dev";
  const primaryTo = process.env.CONTACT_TO || COMPANY.email; // ignovacobsulting26@gmail.com
  const fallbackTo = "growytvercel@gmail.com";

  if (!apiKey) {
    return json(
      { error: "The contact form is not configured yet. Please email us directly." },
      503
    );
  }

  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safeCompany = escapeHtml(submission.company);
  const safePhone = escapeHtml(submission.phone || "Not provided");
  const safeService = escapeHtml(submission.service || "Not specified");
  const safeMessage = escapeHtml(submission.message).replace(/\r?\n/g, "<br>");

  const makePayload = (recipient: string, isFallback: boolean) => ({
    from,
    to: [recipient],
    reply_to: submission.email,
    subject: isFallback
      ? `[Forward to ${primaryTo}] Website inquiry from ${submission.company}`
      : `Website inquiry from ${submission.company}`,
    text: [
      isFallback ? `[FORWARD TO: ${primaryTo}]\n` : "",
      `Name: ${submission.name}`,
      `Email: ${submission.email}`,
      `Company: ${submission.company}`,
      `Phone: ${submission.phone || "Not provided"}`,
      `Service: ${submission.service || "Not specified"}`,
      "",
      submission.message,
    ].join("\n"),
    html: `
      ${isFallback ? `<div style="background:#fffbeb;border:1px solid #f59e0b;padding:12px;border-radius:8px;margin-bottom:16px;color:#92400e;font-family:sans-serif;"><strong>Notice:</strong> Please forward this website lead to <strong>${primaryTo}</strong>.</div>` : ""}
      <h1>New website inquiry</h1>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Service:</strong> ${safeService}</p>
      <p><strong>Message:</strong><br>${safeMessage}</p>
    `,
  });

  try {
    let response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "User-Agent": "IGNOVA-Website/1.0",
      },
      body: JSON.stringify(makePayload(primaryTo, false)),
      signal: AbortSignal.timeout(8000),
      cache: "no-store",
    });

    // If Resend free testing domain restricts recipient, fallback to the verified account owner email
    if (response.status === 403 && primaryTo !== fallbackTo) {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "User-Agent": "IGNOVA-Website/1.0",
        },
        body: JSON.stringify(makePayload(fallbackTo, true)),
        signal: AbortSignal.timeout(8000),
        cache: "no-store",
      });
    }

    if (!response.ok) {
      return json({ error: "We couldn't send your message right now. Please try again or email us directly." }, 502);
    }

    return json({ success: true });
  } catch {
    return json({ error: "We couldn't send your message right now. Please try again or email us directly." }, 502);
  }
}
