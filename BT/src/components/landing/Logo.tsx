import Image from "next/image";

interface LogoProps {
  /** Mark height in px; width scales from the SVG viewBox ratio. */
  markHeight?: number;
  className?: string;
}

export function Logo({ markHeight = 30, className = "" }: LogoProps) {
  const markWidth = Math.round(markHeight * 1.4);
  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Runlets home"
    >
      <Image
        src="/images/runlets-mark-mono.svg"
        alt=""
        width={markWidth}
        height={markHeight}
        priority
      />
      <span className="font-display text-[22px] font-bold lowercase leading-none tracking-tight text-foreground">
        runlets
      </span>
    </a>
  );
}
