import "./SearchBar.css";

interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        aria-label={placeholder}
      />
    </div>
  );
}

export default SearchBar;