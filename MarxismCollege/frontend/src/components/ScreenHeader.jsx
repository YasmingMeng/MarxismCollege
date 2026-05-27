export default function ScreenHeader({ profile, isApiReady }) {
  return (
    <header className="relative z-10 grid min-h-24 grid-cols-[minmax(460px,1fr)_auto_auto] items-center gap-7">
      <div className="flex items-center gap-5">
        <span className="grid h-16 w-16 place-items-center border border-white/30 bg-screen-red text-3xl font-extrabold shadow-redGlow">
          思
        </span>
        <div>
          <p className="m-0 text-xs uppercase text-screen-gold">Marxism College</p>
          <h1 className="mt-1 text-[34px] font-bold leading-tight">{profile.title}</h1>
        </div>
      </div>
      <p className="m-0 whitespace-nowrap text-lg text-screen-muted">{profile.subtitle}</p>
      <ul className="grid grid-cols-4 gap-3">
        {profile.stats.map((item) => (
          <li key={item.label} className="min-h-16 border border-white/15 bg-screen-navy/60 px-3 py-2">
            <strong className="block text-2xl leading-none text-screen-gold">{item.value}</strong>
            <span className="mt-2 block text-xs text-screen-muted">{item.label}</span>
          </li>
        ))}
        <li className="min-h-16 border border-white/15 bg-screen-navy/60 px-3 py-2">
          <strong className="block text-2xl leading-none text-screen-gold">{isApiReady ? "在线" : "离线"}</strong>
          <span className="mt-2 block text-xs text-screen-muted">后端服务</span>
        </li>
      </ul>
    </header>
  );
}
