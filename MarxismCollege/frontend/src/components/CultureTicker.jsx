export default function CultureTicker({ items }) {
  const tickerItems = [...items, ...items];

  return (
    <footer className="relative z-10 h-11 overflow-hidden border-y border-screen-gold/20 bg-screen-navy/70">
      <div className="flex h-full w-max animate-ticker items-center">
        {tickerItems.map((item, index) => (
          <span key={`${item}-${index}`} className="relative inline-flex h-full items-center px-9 text-sm text-screen-muted before:absolute before:left-3 before:h-2 before:w-2 before:bg-screen-brightRed">
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
