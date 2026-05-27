import { useEffect, useMemo, useState } from "react";
import CultureTicker from "../components/CultureTicker.jsx";
import DigitalHumanPanel from "../components/DigitalHumanPanel.jsx";
import ScreenHeader from "../components/ScreenHeader.jsx";
import ScenarioGrid from "../components/ScenarioGrid.jsx";
import { fetchScreenContent } from "../services/screenApi.js";

const initialContent = {
  collegeProfile: {
    title: "马克思主义学院文化展示大屏",
    subtitle: "理论铸魂 · 红色传承 · 实践育人",
    stats: []
  },
  digitalHuman: {
    role: "思政讲解数字人",
    title: "欢迎走进马克思主义学院",
    summary: "正在加载学院文化展示内容。",
    tags: ["学院概览", "专业导览", "红色讲解"]
  },
  scenarios: [],
  tickerItems: []
};

export default function ScreenPage() {
  const [content, setContent] = useState(initialContent);
  const [activeId, setActiveId] = useState("");
  const [isApiReady, setIsApiReady] = useState(false);

  useEffect(() => {
    fetchScreenContent()
      .then((data) => {
        setContent(data);
        setActiveId(data.scenarios[0]?.id || "");
        setIsApiReady(true);
      })
      .catch(() => {
        setIsApiReady(false);
      });
  }, []);

  const activeScenario = useMemo(
    () => content.scenarios.find((item) => item.id === activeId),
    [activeId, content.scenarios]
  );

  return (
    <main className="relative grid h-screen min-w-[1180px] grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-screen-navy px-9 py-7 text-white">
      <div className="pointer-events-none absolute inset-[18px] border border-screen-gold/20" />
      <div className="pointer-events-none absolute inset-[30px] border border-blue-400/20" />
      <ScreenHeader profile={content.collegeProfile} isApiReady={isApiReady} />
      <section className="relative z-10 grid min-h-0 grid-cols-[minmax(620px,1.15fr)_minmax(420px,0.85fr)] gap-7 py-6">
        <DigitalHumanPanel base={content.digitalHuman} scenario={activeScenario} />
        <aside className="grid min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-5 rounded-lg border border-white/15 bg-screen-panel/75 p-6 shadow-blueGlow">
          <div className="flex items-end justify-between gap-4">
            <span className="text-xs uppercase text-screen-gold">Scene Gateway</span>
            <h2 className="text-2xl font-bold">三大主题场景</h2>
          </div>
          <ScenarioGrid items={content.scenarios} activeId={activeId} onSelect={setActiveId} />
        </aside>
      </section>
      <CultureTicker items={content.tickerItems} />
    </main>
  );
}
