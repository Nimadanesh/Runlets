/**
 * AmbientGlow — slow-drifting monochrome aurora blooms + film grain.
 * Fixed, behind content; pure atmosphere for the dark-gloss theme.
 */
export function AmbientGlow() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="aurora-a absolute -top-48 left-[6%] h-[580px] w-[580px] rounded-full bg-white/[0.06] blur-[130px]" />
        <div className="aurora-b absolute top-[8%] right-[2%] h-[660px] w-[660px] rounded-full bg-white/[0.05] blur-[140px]" />
        <div className="aurora-c absolute bottom-[-12%] left-[28%] h-[740px] w-[740px] rounded-full bg-white/[0.035] blur-[150px]" />
      </div>
      <div className="grain" aria-hidden />
    </>
  );
}
