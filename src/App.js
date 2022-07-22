import { UilAngleDown, UilTimes } from "@iconscout/react-unicons";
import "./styles/main.scss";
import Container from "react-bootstrap/Container";
import Inputs from "./components/Inputs";
import TopButtons from "./components/TopButtons";
import TimeAndLocation from "./components/TimeAndLocation";
import TempDetails from "./components/TempDetails";
import Forecast from "./components/Forecast";
import DotLoader from "react-spinners/DotLoader";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";

function App() {
  const [query, setQuery] = useState({ q: "kyiv" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [query, units]);

  return (
    <div>
      {loading ? (
        <DotLoader
          color={"#2f4171"}
          loading={loading}
          size={100}
          className="loader"
        />
      ) : (
        <ScrollContainer>
          <div className="wrapper">
            <Container>
              <TopButtons setQuery={setQuery} />
              <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

              {weather && (
                <div className="main-container">
                  <TimeAndLocation weather={weather} />
                  <TempDetails weather={weather} />
                  <Collapsible
                    trigger={["HOURLY FORECAST", <UilAngleDown />]}
                    triggerWhenOpen={<UilTimes />}
                    className={"collapse"}
                    triggerTagName={"div"}
                  >
                    <Forecast title="hourly forecast" items={weather.hourly} />
                  </Collapsible>
                  <Collapsible
                    trigger={["DAILY FORECAST", <UilAngleDown />]}
                    triggerWhenOpen={<UilTimes />}
                    className={"collapse"}
                    triggerTagName={"div"}
                  >
                    <Forecast title="daily forecast" items={weather.daily} />
                  </Collapsible>
                </div>
              )}
            </Container>
          </div>
        </ScrollContainer>
      )}
    </div>
  );
}

export default App;
