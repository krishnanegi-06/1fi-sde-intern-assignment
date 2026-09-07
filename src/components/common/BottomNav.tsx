import "./BottomNav.css";

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

const NAV_ITEMS = [
  {
    id: "home",
    label: "Home",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 20v-9.5z" />
        <path d="M10 21v-7h4v7" />
      </svg>
    ),
  },
  {
    id: "shop",
    label: "Shop",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l1-5h16l1 5" />
        <path d="M3 9c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3c0 1.66 1.34 3 3 3s3-1.34 3-3" />
        <path d="M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        <path d="M9 21v-5h6v5" />
      </svg>
    ),
  },
  {
    id: "emi",
    label: "EMI Dues",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 2l2 1.5L9 2l2 1.5L13 2l2 1.5L17 2l2 1.5L20 2v20l-1-.75-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L5 22V2z" />
        <path d="M9 7.5h6M9 10.5h6M9 10.5c1.4 0 2.2.7 2.2 1.8s-.8 1.7-2.2 1.7h1.2l2.3 3M9 12.8h3" />
      </svg>
    ),
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    id: "limit",
    label: "Limit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V14M6 20v-4" />
        <path d="M5 11l4-4 4 3 6-6" />
        <polyline points="15 4 19 4 19 8" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

function BottomNav({ activeTab = "shop", onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => {
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            type="button"
            className={`nav-item ${isActive ? "nav-item-active" : ""}`}
            onClick={() => onTabChange?.(item.id)}
          >
            {isActive && <span className="nav-active-bar" />}
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;