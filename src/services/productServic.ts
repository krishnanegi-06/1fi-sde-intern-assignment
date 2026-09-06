import type { Product } from "../types/product";
import { products } from "../data/products";

const SIMULATED_DELAY_MS = 800;
const FAILURE_RATE = 0; 

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(SIMULATED_DELAY_MS);
  if (Math.random() < FAILURE_RATE) {
    throw new Error("Failed to fetch products. Please try again.");
  }
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(SIMULATED_DELAY_MS);
  if (Math.random() < FAILURE_RATE) {
    throw new Error("Failed to fetch product details. Please try again.");
  }
  return products.find((p) => p.id === id);
}