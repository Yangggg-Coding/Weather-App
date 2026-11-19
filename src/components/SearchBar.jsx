import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="search-bar" role="search" onSubmit={(event) => event.preventDefault()}>
      <Search className="search-bar__icon" size={20} />
      <input
        className="search-bar__input"
        type="search"
        placeholder="Search city..."
        aria-label="Search city"
      />
    </form>
  );
}
