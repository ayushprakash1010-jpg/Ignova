import Image from "next/image";

interface PracticeHeroVisualProps {
  src: string;
  alt: string;
  objectPosition?: string;
}

/**
 * Renders full-bleed architectural photography integrated directly into the
 * cream hero canvas via responsive directional alpha masking.
 */
export default function PracticeHeroVisual({
  src,
  alt,
  objectPosition = "object-center",
}: PracticeHeroVisualProps) {
  return (
    <div className="order-2 lg:order-none relative w-full h-[280px] sm:h-[340px] lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[57%] xl:w-[56%] practice-hero-mask overflow-hidden pointer-events-none select-none">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 57vw"
        className={`object-cover ${objectPosition} animate-hero-settle`}
      />
    </div>
  );
}
