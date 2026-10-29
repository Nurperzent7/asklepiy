export function PageIntro({
  kicker,
  title,
  text,
}: {
  kicker?: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="relative mb-8 overflow-hidden rounded-[28px] border border-white/80 bg-white/80 px-6 py-8 shadow-[0_18px_50px_rgba(12,40,60,0.06)] backdrop-blur-sm">
      <div className="pointer-events-none absolute -top-12 -right-8 size-40 rounded-full bg-[#00a9c1]/15 blur-2xl" />
      {kicker ? <p className="text-xs font-bold tracking-[0.16em] text-[#00a9c1]">{kicker}</p> : null}
      <h1 className="relative mt-2 text-4xl font-extrabold tracking-tight">{title}</h1>
      {text ? <p className="relative mt-3 max-w-2xl leading-relaxed text-[#4a5568]">{text}</p> : null}
    </header>
  );
}
