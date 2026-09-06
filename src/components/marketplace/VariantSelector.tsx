import type { ProductVariant } from "../../types/product";
import "./VariantSelector.css";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelect: (variantId: string) => void;
}

function VariantSelector({ variants, selectedVariantId, onSelect }: VariantSelectorProps) {
  if (variants.length === 0) return null;

  // Group variants by their "name" (e.g., all "Color" variants together)
  const groupName = variants[0].name;

  return (
    <div className="variant-selector">
      <h4 className="variant-selector-label">{groupName}</h4>
      <div className="variant-options">
        {variants.map((variant) => (
          <button
            key={variant.id}
            className={`variant-chip ${
              variant.id === selectedVariantId ? "variant-chip-active" : ""
            }`}
            onClick={() => onSelect(variant.id)}
          >
            {variant.value}
            {variant.priceAdjustment > 0 && ` (+₹${variant.priceAdjustment})`}
          </button>
        ))}
      </div>
    </div>
  );
}

export default VariantSelector;