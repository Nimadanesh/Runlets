/**
 * SiteRays — resend-style light rays washing down from the top of the page.
 * Pure CSS, static, pointer-transparent.
 */
export function SiteRays() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
      aria-hidden
    >
      {/* central wash */}
      <div
        className="absolute inset-x-0 top-0 h-[760px]"
        style={{
          background:
            "radial-gradient(58% 46% at 50% 0%, rgba(255,255,255,0.09) 0%, transparent 70%)",
        }}
      />
      {/* angled beams */}
      <div className="rays-sway absolute inset-x-0 top-0">
      <div
        className="absolute left-1/2 top-[-260px] h-[820px] w-[380px] -translate-x-[85%] rotate-[16deg] blur-3xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), transparent 75%)",
        }}
      />
      <div
        className="absolute left-1/2 top-[-260px] h-[820px] w-[380px] -translate-x-[15%] rotate-[-16deg] blur-3xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), transparent 75%)",
        }}
      />
      </div>
      {/* floor fade into black */}
      <div
        className="absolute inset-x-0 top-[560px] h-[200px]"
        style={{
          background:
            "linear-gradient(180deg, transparent, #070709 90%)",
        }}
      />
    </div>
  );
}
