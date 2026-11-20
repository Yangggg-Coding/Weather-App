import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    const city = text.trim();
    if (!city) return;
    onSearch(city);
  }
  return (
    <form className="search-bar" role="search" onSubmit={handleSearch}>
      <Search className="search-bar__icon" size={20} />
      <input
        className="search-bar__input"
        type="search"
        placeholder="Search city..."
        aria-label="Search city"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="search__btn" type="submit">
        Search
      </button>
    </form>
  );
}
