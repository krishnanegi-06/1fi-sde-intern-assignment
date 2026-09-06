import "./BottomNav.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "🏠" },
  { id: "shop", label: "Shop", icon: "🛍️" },
  { id: "emi", label: "EMI Dues", icon: "🧾" },
  { id: "limit", label: "Limit", icon: "📈" },
  { id: "profile", label: "Profile", icon: "👤" },
];

function BottomNav() {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => (
        <div
          key={item.id}
          className={`nav-item ${item.id === "shop" ? "nav-item-active" : ""}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default BottomNav;