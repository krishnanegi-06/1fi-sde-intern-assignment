import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductDetails } from "../../hooks/useProductDetails";
import VariantSelector from "../../components/marketplace/VariantSelector";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { product, emiPlans, loading, error, retry } = useProductDetails(productId);

  const [selectedVariantId, setSelectedVariantId] = useState<string>("");

  // Once product loads, default to its first variant (if any)
  useEffect(() => {
    if (product && product.variants.length > 0) {
      setSelectedVariantId(product.variants[0].id);
    }
  }, [product]);

  const displayPrice = useMemo(() => {
    if (!product) return 0;
    const variant = product.variants.find((v) => v.id === selectedVariantId);
    return product.basePrice + (variant?.priceAdjustment ?? 0);
  }, [product, selectedVariantId]);

  if (loading) return <LoadingState message="Loading product details..." />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (!product) return null;

  return (
    <div className="product-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img src={product.image} alt={product.name} className="product-details-image" />

      <div className="product-details-content">
        <h1 className="product-details-name">{product.name}</h1>
        <p className="product-details-price">₹{displayPrice.toLocaleString("en-IN")}</p>
        <p className="product-details-description">{product.description}</p>

        {product.variants.length > 0 && (
          <VariantSelector
            variants={product.variants}
            selectedVariantId={selectedVariantId}
            onSelect={setSelectedVariantId}
          />
        )}

        <div className="emi-section-placeholder">
          <p>EMI plan selection coming in the next step ({emiPlans.length} plans available)</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;