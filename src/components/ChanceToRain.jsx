
import dayjs from "dayjs";

export default function ChanceToRain({ daily = [] }) {
  const rain = daily.slice(0, 5);

  return (
    <aside className="rain-panel">
      <h3>Chance of rain</h3>
      <div className="rain-chart">
        {rain.map((item) => (
          <div className="rain-column" key={item.date}>
            <span>{item.rainChance ?? 0}%</span>
            <i
              style={{ height: `${item.rainChance ?? 0}%` }}
              aria-label={`${dayjs(item.date).format("dddd")}: ${item.rainChance ?? 0}% chance of rain`}
            />
          </div>
        ))}
      </div>
      <div className="rain-times">
        {rain.map((item) => (
          <span key={item.date}>{dayjs(item.date).format("ddd")}</span>
        ))}
      </div>
    </aside>
  );
}