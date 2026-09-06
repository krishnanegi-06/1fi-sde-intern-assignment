import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/common/Tabs";
import SearchBar from "../../components/common/SearchBar";
import ProductCard from "../../components/marketplace/ProductCard";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import { useProducts } from "../../hooks/useProducts";
import "./Shop.css";

const SHOP_TABS = [
  { id: "top-brands", label: "Top Brands" },
  { id: "nearby-stores", label: "Nearby Stores" },
  { id: "marketplace", label: "1Fi Marketplace" },
];

function Shop() {
  const [activeTab, setActiveTab] = useState("top-brands");
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
          {activeTab === "marketplace" && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;