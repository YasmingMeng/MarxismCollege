const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export async function fetchScreenContent() {
  const response = await fetch(`${API_BASE_URL}/api/screen-content`);

  if (!response.ok) {
    throw new Error("screen content request failed");
  }

  const data = await response.json();

  return normalizeScreenContent(data);
}

function normalizeScreenContent(data) {
  return {
    collegeProfile: data.college_profile,
    digitalHuman: data.digital_human,
    scenarios: data.scenarios.map((item) => ({
      ...item,
      panelTitle: item.panel_title,
      panelSummary: item.panel_summary
    })),
    tickerItems: data.ticker_items
  };
}
