import type { Product } from "../../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.name} className="product-card-image" />
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">₹{product.basePrice.toLocaleString("en-IN")}</p>
      </div>
      <span className="product-card-badge">EMI</span>
    </button>
  );
}

export default ProductCard;