import { ChevronRight } from "lucide-react";
export default function OtherLargeCity() {
  const LargeCity = [
    {
      name: "US",
      city: "California",
      data: "MostLy Sunny",
      icon: "🌤️",
      temp: "29",
    },
    {
      name: "China",
      city: "Beijing",
      data: "Cloudy",
      icon: "🌧️",
      temp: "19",
    },
    {
      name: "Israaek",
      city: "Jerusaleem",
      data: "Sunny",
      icon: "☀️",
      temp: "31",
    },
  ];
  return (
    <section className="cities-section">
      <div className="cities-section__head">
        <h3>Other large cities</h3>
        <button type="button" className="cities-section__show-all">
          <span>Show All</span>
          <ChevronRight size={13} />
        </button>
      </div>
      <div className="cities-list">
        {LargeCity.map((data) => {
          return (
            <article className="city-card" key={data.city}>
              <div>
                <span>{data.name}</span>
                <p>{data.city}</p>
                <p>{data.data}</p>
              </div>
              <div>
                <p>{data.icon}</p>
                <p>{data.temp}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
