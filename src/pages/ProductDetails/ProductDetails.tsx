import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductDetails } from "../../hooks/useProductDetails";
import VariantSelector from "../../components/marketplace/VariantSelector";
import EmiPlanCard from "../../components/marketplace/EmiPlanCard";
import PrimaryButton from "../../components/common/PrimaryButton";
import LoadingState from "../../components/common/LoadingState";
import ErrorState from "../../components/common/ErrorState";
import "./ProductDetails.css";

function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { product, emiPlans, loading, error, retry } = useProductDetails(productId);

  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [selectedEmiPlanId, setSelectedEmiPlanId] = useState<string>("");
  const [confirmed, setConfirmed] = useState(false);

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

  const selectedVariant = product?.variants.find((v) => v.id === selectedVariantId);
  const selectedEmiPlan = emiPlans.find((p) => p.id === selectedEmiPlanId);

  if (loading) return <LoadingState message="Loading product details..." />;
  if (error) return <ErrorState message={error} onRetry={retry} />;
  if (!product) return null;

  if (confirmed && selectedEmiPlan) {
    return (
      <div className="product-details-page">
        <div className="confirmation-screen">
          <div className="confirmation-icon">✓</div>
          <h2>EMI Plan Confirmed</h2>
          <div className="confirmation-summary">
            <p><strong>Product:</strong> {product.name}</p>
            {selectedVariant && (
              <p><strong>{selectedVariant.name}:</strong> {selectedVariant.value}</p>
            )}
            <p>
              <strong>EMI Plan:</strong> ₹{selectedEmiPlan.monthlyAmount.toLocaleString("en-IN")} ×{" "}
              {selectedEmiPlan.durationMonths} months
            </p>
            <p><strong>Total Amount:</strong> ₹{selectedEmiPlan.totalAmount.toLocaleString("en-IN")}</p>
          </div>
          <PrimaryButton label="Back to Marketplace" onClick={() => navigate("/")} />
        </div>
      </div>
    );
  }

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

        <div className="emi-section">
          <h4 className="emi-section-label">Choose EMI Plan</h4>
          <div className="emi-plan-list">
            {emiPlans.map((plan) => (
              <EmiPlanCard
                key={plan.id}
                plan={plan}
                isSelected={plan.id === selectedEmiPlanId}
                onSelect={() => setSelectedEmiPlanId(plan.id)}
              />
            ))}
          </div>
        </div>

        <div className="proceed-cta">
          <PrimaryButton
            label={selectedEmiPlan ? `Proceed with ₹${selectedEmiPlan.monthlyAmount.toLocaleString("en-IN")}/mo` : "Select an EMI plan"}
            onClick={() => setConfirmed(true)}
            disabled={!selectedEmiPlanId}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;