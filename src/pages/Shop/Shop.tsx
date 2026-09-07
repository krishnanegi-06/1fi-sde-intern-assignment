import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/common/Tabs";
import SearchBar from "../../components/common/SearchBar";
import ProductCard from "../../components/marketplace/ProductCard";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useProducts } from "../../hooks/useProducts";
import { TOP_BRANDS, NEARBY_STORES } from "../../data/brandsAndStores";
import heroArt from "../../assets/hero-art.png";
import "./Shop.css";

const SHOP_TABS = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "marketplace", label: "Marketplace" },
];

function BrandLogo({ type, bg }: { type: string; bg: string }) {
  if (type === "airindia") {
    return (
      <div className="brand-logo-box" style={{ backgroundColor: bg }}>
        <span className="logo-airindia">AIR INDIA</span>
      </div>
    );
  }
  if (type === "apple") {
    return (
      <div className="brand-logo-box" style={{ backgroundColor: bg }}>
        <svg width="22" height="22" viewBox="0 0 170 170" fill="white">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.85-12-14.42-6.19-9.46-10.99-20.09-14.4-31.89-3.41-11.8-5.12-22.95-5.12-33.45 0-14.58 3.73-26.69 11.19-36.32 7.46-9.63 16.89-14.53 28.29-14.7 4.9 0 10.45 1.34 16.65 4.02 6.2 2.68 10.15 4.09 11.85 4.22 1.48-.27 5.56-1.74 12.24-4.42 6.68-2.68 12.38-3.88 17.1-3.6 12.63.79 22.87 5.75 30.73 14.88-10.99 6.64-16.38 15.74-16.16 27.29.22 9.03 3.65 16.67 10.29 22.92 6.64 6.25 14.55 9.77 23.74 10.56-2.02 6.09-4.5 12.18-7.44 18.28zM119.22 33.64c0-7.39 2.65-14.18 7.96-20.37 5.3-6.19 11.75-10.22 19.34-12.09.85 7.17-1.39 13.88-6.73 20.13-5.34 6.25-11.89 10.36-19.65 12.33-.31-.01-.58-.01-.92 0z" />
        </svg>
        <span className="apple-sub">Premium Reseller</span>
      </div>
    );
  }
  if (type === "caratlane") {
    return (
      <div className="brand-logo-box" style={{ backgroundColor: bg }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="3" fill="white" />
        </svg>
        <span className="caratlane-sub">CARATLANE</span>
      </div>
    );
  }
  return (
    <div className="brand-logo-box" style={{ backgroundColor: bg }}>
      <span className="brand-logo-fallback">{type.toUpperCase()}</span>
    </div>
  );
}

function StoreLogo({ type }: { type: string }) {
  if (type === "suzuki") {
    return (
      <div className="store-logo-box">
        <svg width="28" height="28" viewBox="0 0 100 100" fill="#E31E24">
          <path d="M15 20 L85 20 L55 50 L85 50 L15 80 L45 50 L15 50 Z" />
        </svg>
        <span className="store-suzuki-txt">SUZUKI</span>
      </div>
    );
  }
  if (type === "honda") {
    return (
      <div className="store-logo-box">
        <svg width="26" height="26" viewBox="0 0 100 100" fill="#CC0000">
          <path d="M10 50 C25 20 65 15 90 35 C70 45 40 45 25 65 C40 60 70 65 85 75 C55 85 25 80 10 50 Z" />
        </svg>
        <span className="store-honda-txt">HONDA</span>
      </div>
    );
  }
  if (type === "atelier") {
    return (
      <div className="store-logo-box store-logo-atelier">
        <svg width="30" height="30" viewBox="0 0 100 100" fill="#C5A059">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#C5A059" strokeWidth="6" />
          <path d="M50 20 C45 35 45 45 50 50 C55 45 55 35 50 20 Z" />
          <path d="M50 80 C45 65 45 55 50 50 C55 55 55 65 50 80 Z" />
          <path d="M20 50 C35 45 45 45 50 50 C45 55 35 55 20 50 Z" />
          <path d="M80 50 C65 45 55 45 50 50 C55 55 65 55 80 50 Z" />
        </svg>
      </div>
    );
  }
  if (type === "charger") {
    return (
      <div className="store-logo-box">
        <span className="store-charger-txt">CHARGER<br />ON WHEEL</span>
      </div>
    );
  }
  return (
    <div className="store-logo-box">
      <span className="store-generic-txt">STORE</span>
    </div>
  );
}

function Shop() {
  const [activeTab, setActiveTab] = useState("nearby-stores");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const { products, loading, error, retry } = useProducts();

  const filteredProducts = useMemo(() => {
    if (!searchValue.trim()) return products;
    const query = searchValue.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }, [products, searchValue]);

  const filteredBrands = useMemo(() => {
    if (!searchValue.trim()) return TOP_BRANDS;
    const query = searchValue.toLowerCase();
    return TOP_BRANDS.filter(
      (b) =>
        b.name.toLowerCase().includes(query) ||
        b.emiText.toLowerCase().includes(query)
    );
  }, [searchValue]);

  const filteredStores = useMemo(() => {
    if (!searchValue.trim()) return NEARBY_STORES;
    const query = searchValue.toLowerCase();
    return NEARBY_STORES.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.address.toLowerCase().includes(query)
    );
  }, [searchValue]);

  return (
    <div className="shop-page">
      {/* Top Hero Banner */}
      <section className="hero-banner">
        <div className="hero-banner-content">
          <div className="hero-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.88L12 15.4l-6.18 3.62L7 12.14 2 7.27l6.91-1.01z" />
            </svg>
            <span>NO-COST EMIs</span>
          </div>
          <h1 className="hero-heading">
            Shop today,
            <br />
            <em>Pay later using</em>
            <br />
            <strong>Mutual funds.</strong>
          </h1>
          <p className="hero-subtext">
            No credit score required. No interest.
            <br />
            Backed by your investments.
          </p>
        </div>
        <div className="hero-art-wrapper">
          <img src={heroArt} alt="Products" className="hero-art-image" />
        </div>
      </section>

      {/* Main Content Area overlapping Hero */}
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

        {/* TOP BRANDS TAB */}
        {activeTab === "top-brands" && (
          <div className="stores-section">
            <div className="section-header">
              <h2 className="section-title">Top Brands</h2>
            </div>
            <div className="brands-list">
              {filteredBrands.map((brand) => (
                <div key={brand.id} className="brand-card">
                  <BrandLogo type={brand.logoType} bg={brand.bg} />
                  <div className="brand-info">
                    <h3 className="brand-name">{brand.name}</h3>
                    <p className="brand-emi">{brand.emiText}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEARBY STORES TAB */}
        {activeTab === "nearby-stores" && (
          <div className="stores-section">
            <div className="section-header">
              <h2 className="section-title">Nearby Stores</h2>
              <button type="button" className="location-pill">
                <span>Dehradun</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
            <div className="stores-list">
              {filteredStores.map((store) => (
                <div key={store.id} className="store-card">
                  <StoreLogo type={store.logoType} />
                  <div className="store-info">
                    <div className="store-header-row">
                      <h3 className="store-name">{store.name}</h3>
                      <span className="distance-badge">{store.distance}</span>
                    </div>
                    <p className="store-address">{store.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 1FI MARKETPLACE TAB */}
        {activeTab === "marketplace" && (
          <div className="stores-section">
            <div className="section-header">
              <h2 className="section-title">Marketplace Products</h2>
            </div>
            {loading && <LoadingState message="Loading products..." />}
            {!loading && error && <ErrorState message={error} onRetry={retry} />}
            {!loading && !error && filteredProducts.length === 0 && (
              <EmptyState message="No products found" />
            )}
            {!loading && !error && filteredProducts.length > 0 && (
              <div className="product-list">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;