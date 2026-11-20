import { ArrowRight } from "lucide-react";
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
    <>
      <section>
        <div>
          <h3>Other large cities</h3>
          <div>
            <p>Show All</p>
            <ArrowRight size={20} />
          </div>
        </div>
        <div>
          {LargeCity.map((data) => {
            return (
              <div key={data.id}>
                <div>
                  <span>{data.name}</span>
                  <p>{data.city}</p>
                  <p>{data.data}</p>
                </div>
                <div>
                  <p>{data.icon}</p>
                  <p>{data.temp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
