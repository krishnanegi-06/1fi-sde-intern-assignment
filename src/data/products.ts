import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    description:
      "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and quick charge support.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    basePrice: 19999,
    variants: [
      { id: "v1", name: "Color", value: "Matte Black", priceAdjustment: 0 },
      { id: "v2", name: "Color", value: "Silver", priceAdjustment: 500 },
    ],
    emiPlanIds: ["emi-3m", "emi-6m", "emi-12m"],
  },
  {
    id: "prod-2",
    name: "Smart Fitness Watch",
    category: "Wearables",
    description:
      "Track heart rate, sleep, and workouts with a 7-day battery life and always-on AMOLED display.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    basePrice: 12999,
    variants: [
      { id: "v3", name: "Size", value: "42mm", priceAdjustment: 0 },
      { id: "v4", name: "Size", value: "46mm", priceAdjustment: 1000 },
    ],
    emiPlanIds: ["emi-3m", "emi-6m", "emi-12m", "emi-24m"],
  },
  {
    id: "prod-3",
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    description:
      "Compact waterproof speaker with 360° sound and 15-hour battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    basePrice: 4999,
    variants: [
      { id: "v5", name: "Color", value: "Blue", priceAdjustment: 0 },
      { id: "v6", name: "Color", value: "Red", priceAdjustment: 0 },
    ],
    emiPlanIds: ["emi-3m", "emi-6m"],
  },
  {
    id: "prod-4",
    name: "4K Action Camera",
    category: "Cameras",
    description:
      "Waterproof 4K action camera with stabilization, ideal for travel and sports.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    basePrice: 24999,
    variants: [
      { id: "v7", name: "Bundle", value: "Camera Only", priceAdjustment: 0 },
      { id: "v8", name: "Bundle", value: "Camera + Accessories Kit", priceAdjustment: 3000 },
    ],
    emiPlanIds: ["emi-6m", "emi-12m", "emi-24m"],
  },
];