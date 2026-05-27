import { ArrowRight } from "lucide-react";

export default function ScenarioGrid({ items, activeId, onSelect }) {
  return (
    <div className="grid min-h-0 grid-rows-3 gap-4">
      {items.map((item, index) => {
        const isActive = item.id === activeId;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`group grid min-h-0 grid-cols-[48px_1fr] grid-rows-[auto_auto_1fr_auto] gap-x-4 overflow-hidden rounded-lg border p-5 text-left transition ${
              isActive
                ? "border-screen-gold/50 bg-screen-red/15 shadow-redGlow"
                : "border-white/15 bg-screen-blue/60 hover:border-screen-gold/50 hover:bg-screen-red/10"
            }`}
          >
            <span className="row-span-4 text-2xl font-extrabold text-screen-gold/90">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-xs uppercase text-screen-gold">{item.eyebrow}</span>
            <strong className="mt-2 text-3xl">{item.title}</strong>
            <span className="mt-3 text-base leading-6 text-screen-muted">{item.description}</span>
            <span className="mt-3 inline-flex w-fit items-center gap-2 border border-white/20 bg-screen-red px-3 py-2 text-sm">
              进入场景
              <ArrowRight size={16} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
