
export default function ChanceToRain() {
  const rain = [
    { label: "Rainy", height: 58 },
    { label: "Sunny", height: 78 },
    { label: "Heavy", height: 92 },
    { label: "Rainy", height: 68 },
    { label: "Sunny", height: 46 },
  ];

  return (
    <aside className="rain-panel">
      <h3>Chance of rain</h3>
      <div className="rain-chart">
        {rain.map((item, index) => (
          <div className="rain-column" key={`${item.label}-${index}`}>
            <span>{item.label}</span>
            <i style={{ height: `${item.height}%` }} />
          </div>
        ))}
      </div>
      <div className="rain-times">
        <span>10AM</span><span>11AM</span><span>12AM</span><span>01PM</span><span>02PM</span><span>03PM</span>
      </div>
    </aside>
  );
}