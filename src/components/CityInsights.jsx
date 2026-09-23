import InsightCard from "./InsightCard";

function CityInsights({ cityData }) {
  if (!cityData) {
    return null;
  }

  return (
    <section className="city-insights">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">GOOD TO KNOW</p>

          <h2>Little things to know before you go</h2>
        </div>

        <div className="insights-grid">
          <InsightCard
            icon="☀️"
            title="Best time"
            description={cityData.bestTime}
          />

          <InsightCard
            icon="🍴"
            title="Local food"
            description={cityData.localFood}
          />

          <InsightCard
            icon="💡"
            title="Local tip"
            description={cityData.localTip}
          />
        </div>
      </div>
    </section>
  );
}

export default CityInsights;
