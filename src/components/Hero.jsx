import dayjs from "dayjs";

export default function Hero() {
  const now = dayjs().format("DD-MM-YYYY");
  const forecast = [
    { day: "Monday", temp: 30, icon: "☀️" },
    { day: "Tuesday", temp: 31, icon: "🌤️" },
    { day: "Wednesday", temp: 29, icon: "⛅" },
    { day: "Thursday", temp: 27, icon: "🌧️" },
    { day: "Friday", temp: 30, icon: "☀️" },
    { day: "Saturday", temp: 28, icon: "🌦️" },
    { day: "Sunday", temp: 29, icon: "⛅" },
  ];
  return (
    <>
      <section>
        <div>
          <div>
            <p>Today</p>
            <p>Tomorrow</p>
            <p>Next 7 days</p>
          </div>
          <div>
            <button>Forecast</button>
            <button>Air Quality</button> <p>{now}</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          {forecast.map((days) => {
            return (
              <div key={days.day}>
                <h3>{days.day}</h3>
                <p>{days.icon}</p>
                <span>{days.temp}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
