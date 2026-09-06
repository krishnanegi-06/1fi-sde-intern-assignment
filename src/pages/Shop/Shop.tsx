import { useState } from "react";
import Tabs from "../../components/common/Tabs";
import SearchBar from "../../components/common/SearchBar";
import "./Shop.css";

const SHOP_TABS = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "marketplace", label: "1Fi Marketplace" },
];

function Shop() {
  const [activeTab, setActiveTab] = useState("top-brands");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="shop-page">
      <section className="hero-banner">
        <span className="hero-badge">✨ NO-COST EMIs</span>
        <h1 className="hero-heading">
          Shop today,
          <br />
          <em>Pay later using</em>
          <br />
          <strong>Mutual funds.</strong>
        </h1>
        <p className="hero-subtext">
          No credit score required. No interest. Backed by your investments.
        </p>
      </section>

      <div className="shop-content">
        <Tabs tabs={SHOP_TABS} activeTabId={activeTab} onTabChange={setActiveTab} />

        <SearchBar
          placeholder={
            activeTab === "marketplace"
              ? "Search products..."
              : activeTab === "nearby-stores"
              ? "Search stores..."
              : "Search online stores..."
          }
          value={searchValue}
          onChange={setSearchValue}
        />

        <div className="tab-panel">
          {activeTab === "top-brands" && <p>Top Brands (not implemented)</p>}
          {activeTab === "nearby-stores" && <p>Nearby Stores (not implemented)</p>}
          {activeTab === "marketplace" && <p>1Fi Marketplace (coming next)</p>}
        </div>
      </div>
    </div>
  );
}

export default Shop;