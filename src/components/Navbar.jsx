import { Bell, LayoutGrid, MapPin, Moon, Sun, UserRound } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar({ onSearch }) {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <button
          className="navbar__icon-button"
          type="button"
          aria-label="Open menu"
        >
          <LayoutGrid size={19} strokeWidth={2.5} />
        </button>
        <button
          className="navbar__icon-button navbar__notifications"
          type="button"
          aria-label="Notifications"
        >
          <Bell size={18} />
          <span className="navbar__notification-dot" />
        </button>
        <div className="navbar__location">
          <MapPin size={16} fill="currentColor" />
          <span>Seattle, Australia</span>
        </div>
      </div>

      <SearchBar onSearch={onSearch} />

      <div className="navbar__actions">
        <button
          className="navbar__theme-icon"
          type="button"
          aria-label="Light theme"
        >
          <Sun size={21} />
        </button>
        <button
          className="navbar__moon-button"
          type="button"
          aria-label="Dark theme"
        >
          <Moon size={21} fill="currentColor" />
        </button>
        <button
          className="navbar__avatar"
          type="button"
          aria-label="Open profile"
        >
          <UserRound size={20} />
        </button>
      </div>
    </header>
  );
}
