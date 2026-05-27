export default function DigitalHumanPanel({ base, scenario }) {
  const title = scenario?.panelTitle || base.title;
  const summary = scenario?.panelSummary || base.summary;
  const tags = scenario?.keywords || base.tags;

  return (
    <section className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] rounded-lg border border-white/15 bg-screen-panel/75 p-6 shadow-blueGlow">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs uppercase text-screen-gold">Digital Guide</span>
        <span className="text-sm text-screen-muted">{base.role}</span>
      </div>
      <div className="relative my-5 min-h-0 overflow-hidden rounded-lg border border-blue-400/30 bg-stage-grid">
        <div className="absolute left-1/2 top-[48%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-screen-gold/50 shadow-[0_0_80px_rgba(42,114,216,0.24)]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[210px] -translate-x-1/2 -translate-y-[48%]">
          <div className="mx-auto h-[104px] w-[92px] rounded-[46px_46px_34px_34px] border border-white/40 bg-gradient-to-b from-[#f6d7ba] to-[#c9876d]" />
          <div className="mx-auto -mt-1 h-[172px] w-[180px] bg-avatar-body" />
          <div className="absolute left-1/2 top-40 h-12 w-12 -translate-x-1/2 rounded-full border border-screen-gold bg-screen-gold/20 shadow-[0_0_28px_rgba(241,193,91,0.46)]" />
        </div>
        <div className="absolute bottom-6 right-7 h-24 w-44 border-l-2 border-screen-brightRed bg-gradient-to-r from-screen-brightRed/20 to-transparent" />
      </div>
      <div className="rounded-lg border border-white/15 bg-screen-navy/60 p-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-screen-muted">{summary}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag} className="border border-screen-gold/30 bg-screen-gold/10 px-3 py-2 text-sm text-screen-gold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
