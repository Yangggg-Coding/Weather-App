# Weather App

A weather app built with React, JavaScript, and CSS. Search any city and see the current weather and a 5-day forecast. Data comes from the free Open-Meteo API, so no API key is needed.

![Weather app screenshot](./docs/screenshot.png)

**Live demo:** add your link after you deploy.

## Features

Tick each box when the feature works.

- [ ] City search with geocoding
- [ ] Current weather: temperature, condition, wind, and humidity
- [ ] 5-day forecast
- [ ] Celsius and Fahrenheit toggle
- [ ] Recent searches saved in localStorage
- [ ] Loading, error, and "city not found" states
- [ ] Responsive layout for phone and desktop

## Tech stack

React, JavaScript, plain CSS, Lucide React, Vite, ESLint, Open-Meteo API.

## Getting started

Needs Node.js 18 or newer.

```bash
git clone https://github.com/Yangggg-Coding/weather-app.git
cd weather-app
npm install
npm run dev
```

Open the link in the terminal, usually `http://localhost:5173`.

Other scripts: `npm run build`, `npm run preview`, `npm run lint`.

## Project structure

```
src/
  components/    # SearchBar, CurrentWeather, ForecastList, ForecastCard,
                 # RecentSearches, Loader, ErrorMessage
  hooks/         # useWeather
  services/      # weatherApi (all API calls live here)
  utils/         # weatherCodes, formatters
  App.jsx  main.jsx  index.css
```

## How it works

1. You type a city and submit the form.
2. `weatherApi.searchCity` turns the name into latitude and longitude with the Open-Meteo geocoding API.
3. `weatherApi.getForecast` loads current and daily data for that location.
4. `useWeather` holds `weather`, `loading`, and `error`, and runs the request when the city changes.
5. `weatherCodes` maps the API's weather code to a label and an icon.
6. Recent cities and the chosen unit are saved in localStorage.

## API

Weather data by [Open-Meteo](https://open-meteo.com/), free for non-commercial use under CC BY 4.0. No API key is required.

## AI as an assistant

I used an AI assistant (Claude by Anthropic) as a learning aid and pair programmer. I stayed in charge of the design, the code, and every decision.

- **AI:** explained concepts, suggested the folder structure and build order, reviewed my code, and explained bugs.
- **Me:** wrote and tested the code, fixed errors, connected the API, and checked each change with `npm run lint`.

## Roadmap

1. Finish the features above
2. Add a hourly forecast
3. Use the browser location to load the local weather
4. Add tests for the formatter functions
5. Deploy to Vercel

## Author

Heang Hongyang. GitHub: [Yangggg-Coding](https://github.com/Yangggg-Coding)

## License

MIT. Add a `LICENSE` file before you publish.
