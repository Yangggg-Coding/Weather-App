import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

export default function GlobalMap() {
  return (
    <section className="global-map-section">
      <div className="global-map-section__head">
        <h3>Global Map</h3>
        <button type="button">
          View Wide <ChevronRight size={13} />
        </button>
      </div>
      <div className="global-map">
        <button
          className="map-control map-control--left"
          type="button"
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="map-control map-control--right"
          type="button"
          aria-label="Map layers"
        >
          <Layers size={15} />
        </button>
        <span className="map-pin map-pin--one" />
        <span className="map-pin map-pin--two" />
        <span className="map-pin map-pin--three" />
        <article className="map-card">
          <p>
            Explore global map of
            <br />
            wind, weather and oceans
            <br />
            condition.
          </p>
          <div className="map-card__preview" />
          <button type="button">Get started</button>
        </article>
      </div>
    </section>
  );
}
