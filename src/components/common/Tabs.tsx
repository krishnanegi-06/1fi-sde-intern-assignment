import "./Tabs.css";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

function Tabs({ tabs, activeTabId, onTabChange }: TabsProps) {
  return (
    <div className="tabs-container">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <button
            key={tab.id}
            type="button"
            className={`tab-button ${isActive ? "tab-active" : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-label">{tab.label}</span>
            {isActive && <span className="tab-indicator" />}
          </button>
        );
      })}
    </div>
  );
}

export default Tabs;