export interface ProductVariant {
  id : string;
  name : string;
  value : string;
  priceAdjustment: number;
}
export interface Product {
  id: string;
  name : string;
  category : string;
  description: string;
  image: string ;
  basePrice: number;
  variants: ProductVariant[];
  emiPlanIds: string[];
}