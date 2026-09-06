import "./SearchBar.css";
interface SearchBarProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ placeholder, value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;