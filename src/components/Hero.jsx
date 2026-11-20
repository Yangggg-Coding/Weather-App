import dayjs from "dayjs";

export default function Hero() {
  const now = dayjs().format("DD-MM-YYYY");
  const forecast = [
    { day: "Monday", short: "Monday", temp: 16, icon: "🌦️" },
    { day: "Tuesday", short: "Tue", temp: 10, icon: "🌤️" },
    { day: "Wednesday", short: "Wed", temp: 15, icon: "🌤️" },
    { day: "Thursday", short: "Thu", temp: 11, icon: "🌤️" },
    { day: "Friday", short: "Fri", temp: 18, icon: "🌤️" },
    { day: "Saturday", short: "Sat", temp: 12, icon: "🌦️" },
    { day: "Sunday", short: "Sun", temp: 10, icon: "🌦️" },
  ];
  return (
    <section className="forecast-section">
      <div className="forecast-toolbar">
        <div className="forecast-tabs">
          <button type="button">Today</button>
          <button type="button">Tomorrow</button>
          <button className="active" type="button">
            Next 7 days
          </button>
        </div>
        <div className="forecast-actions">
          <button className="active" type="button">
            Forecast
          </button>
          <button type="button">Air Quality</button>
          <span>{now}</span>
        </div>
      </div>
      <div className="forecast-list">
        {forecast.map((item) => (
          <article className="forecast-card" key={item.day}>
            <h3>{item.short}</h3>
            <p>{item.icon}</p>
            <strong>{item.temp}°</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
