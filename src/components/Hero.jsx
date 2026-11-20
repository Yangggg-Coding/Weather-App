import { useState } from "react";
import dayjs from "dayjs";
import { getCondition } from "../utils/weatherCodes";

const ranges = [
  { id: "today", label: "Today" },
  { id: "tomorrow", label: "Tomorrow" },
  { id: "week", label: "Next 7 days" },
];

export default function Hero({ location, current, daily }) {
  const [range, setRange] = useState("week");
  const now = dayjs().format("DD-MM-YYYY");
  const condition = getCondition(current.code);

  let visible = daily.slice(0, 7);
  if (range === "today") visible = daily.slice(0, 1);
  if (range === "tomorrow") visible = daily.slice(1, 2);

  return (
    <section className="forecast-section">
      <div className="forecast-now">
        <h2>
          {location.name}, {location.country}
        </h2>
        <p>
          {condition.icon} {Math.round(current.temperature)}° {condition.label}
        </p>
      </div>

      <div className="forecast-toolbar">
        <div className="forecast-tabs">
          {ranges.map((r) => (
            <button
              key={r.id}
              type="button"
              className={r.id === range ? "active" : ""}
              onClick={() => setRange(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
        <span>{now}</span>
      </div>

      <div className="forecast-list">
        {visible.map((item) => (
          <article className="forecast-card" key={item.date}>
            <h3>{dayjs(item.date).format("ddd")}</h3>
            <p>{getCondition(item.code).icon}</p>
            <strong>{Math.round(item.max)}°</strong>
            <span>{Math.round(item.min)}°</span>
          </article>
        ))}
      </div>
    </section>
  );
}
