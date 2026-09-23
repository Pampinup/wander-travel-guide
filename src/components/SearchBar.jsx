import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const city = searchTerm.trim();

    if (!city) {
      return;
    }

    onSearch(city);
    setSearchTerm("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="city-search" className="visually-hidden">
        Search for a city
      </label>

      <input
        id="city-search"
        type="search"
        placeholder="Search for a city..."
        autoComplete="off"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <button type="submit">Explore</button>
    </form>
  );
}

export default SearchBar;
