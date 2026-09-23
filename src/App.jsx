import { useEffect, useRef, useState } from "react";

import { getCityData } from "./services/aiApi";
import { searchPhotos } from "./services/pexelsApi";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CityIntro from "./components/CityIntro";
import CityInsights from "./components/CityInsights";
import Restaurants from "./components/Restaurants";
import CityMap from "./components/CityMap";
import Gallery from "./components/Gallery";
import LocalMusic from "./components/LocalMusic";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [currentCity, setCurrentCity] = useState("Madrid");
  const [searchingCity, setSearchingCity] = useState("");

  const [cityData, setCityData] = useState(null);
  const [cityPhotos, setCityPhotos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const requestId = useRef(0);

  const displayCity = cityData?.city || currentCity;

  async function handleCitySearch(city) {
    const normalizedCity =
      city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

    // Create a new request ID
    requestId.current += 1;

    const currentRequestId = requestId.current;

    // Store the city being searched
    setSearchingCity(normalizedCity);

    // Start loading
    setIsLoading(true);
    setError("");

    // Give React time to render the loading state
    await new Promise((resolve) => setTimeout(resolve, 100));

    try {
      // Fetch AI data and Pexels photos at the same time
      const [data, photos] = await Promise.all([
        getCityData(normalizedCity),
        searchPhotos(normalizedCity, {
          perPage: 8,
          orientation: "landscape",
        }),
      ]);

      // Ignore results from an older search
      if (currentRequestId !== requestId.current) {
        return;
      }

      // Update everything together
      setCurrentCity(normalizedCity);
      setCityData(data);
      setCityPhotos(photos);
    } catch (error) {
      // Ignore errors from an older search
      if (currentRequestId !== requestId.current) {
        return;
      }

      console.error("City search error:", error);

      setError(
        "We couldn't find information for this city. Please try another search.",
      );
    } finally {
      // Only stop loading for the latest request
      if (currentRequestId === requestId.current) {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    async function loadInitialCity() {
      try {
        const [data, photos] = await Promise.all([
          getCityData("Madrid"),
          searchPhotos("Madrid", {
            perPage: 8,
            orientation: "landscape",
          }),
        ]);

        setCityData(data);
        setCityPhotos(photos);
      } catch (error) {
        console.error("Initial city data error:", error);

        setError(
          "We couldn't load the destination. Please refresh the page and try again.",
        );
      }
    }

    loadInitialCity();
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero
          city={displayCity}
          heroImage={cityPhotos[0]?.src.large}
          onSearch={handleCitySearch}
          isLoading={isLoading}
          loadingCity={searchingCity}
        />

        <CityIntro cityData={cityData} image={cityPhotos[1]?.src.large} />

        <CityInsights cityData={cityData} />

        <Restaurants cityData={cityData} />

        <CityMap
          city={cityData?.city || currentCity}
          country={cityData?.country || ""}
        />

        <Gallery photos={cityPhotos} city={displayCity} />

        <LocalMusic city={displayCity} />

        {error && (
          <div className="error-message container">
            <p>{error}</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
