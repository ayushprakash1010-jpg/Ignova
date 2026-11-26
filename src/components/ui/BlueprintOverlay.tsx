interface BlueprintOverlayProps {
  variant?: "cream" | "navy";
  glow?: "bottom-right" | "top-right" | "top-right-compact" | "top-center" | "top-left" | "bottom-left" | "none";
  topAccent?: boolean;
}

const GLOW_CLASS: Record<NonNullable<BlueprintOverlayProps["glow"]>, string> = {
  "bottom-right": "absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#DF7C36]/10 blur-3xl",
  "top-right": "absolute -top-24 right-0 w-[420px] h-[300px] bg-orange-500/[0.04] rounded-full blur-[90px]",
  "top-right-compact": "absolute top-0 right-0 w-32 h-32 rounded-full bg-[#DF7C36]/10 blur-2xl",
  "top-center": "absolute -top-24 left-1/2 -translate-x-1/2 w-[560px] h-[320px] rounded-full bg-orange/[0.04] blur-[90px]",
  "top-left": "absolute top-16 left-0 w-[420px] h-[420px] rounded-full bg-orange/[0.04] blur-[100px]",
  "bottom-left": "absolute bottom-16 left-0 w-[400px] h-[400px] bg-navy/[0.04] rounded-full blur-[100px]",
  none: "",
};

/** Renders a subtle architectural blueprint grid, ambient radial glow, and optional top copper accent. */
export default function BlueprintOverlay({
  variant = "cream",
  glow,
  topAccent = false,
}: BlueprintOverlayProps) {
  const isNavy = variant === "navy";
  const lineColor = isNavy ? "#FFFFFF" : "#0F2B4C";
  const gridSize = isNavy ? "56px 56px" : "60px 60px";
  const resolvedGlow = glow ?? (isNavy ? "bottom-right" : "top-center");

  return (
    <>
      {topAccent && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DF7C36] via-[#F59E56] to-[#DF7C36]"
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={isNavy ? "absolute inset-0 opacity-[0.05]" : "absolute inset-0 opacity-[0.03]"}
          style={{
            backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
            backgroundSize: gridSize,
          }}
        />
        {resolvedGlow !== "none" && <div className={GLOW_CLASS[resolvedGlow]} />}
      </div>
    </>
  );
}
