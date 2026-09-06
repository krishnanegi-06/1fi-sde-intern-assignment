import { useState, useEffect, useCallback } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/productService";

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

 useEffect(() => {
  // Data fetching on mount is a standard, documented useEffect use case;
  // this rule's "avoid setState in effect" guidance targets derived-state
  // resets (which have a render-time alternative), not async data fetching.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchProducts();
}, [fetchProducts]);

  return { products, loading, error, retry: fetchProducts };
}