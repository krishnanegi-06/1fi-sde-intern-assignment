import { useState, useEffect, useCallback } from "react";
import type { Product } from "../types/product";
import type { EmiPlan } from "../types/emi";
import { getProductById } from "../services/productService";
import { getEmiPlansByIds } from "../services/emiService";

interface UseProductDetailsResult {
  product: Product | null;
  emiPlans: EmiPlan[];
  loading: boolean;
  error: string | null;
  retry: () => void;
}

export function useProductDetails(productId: string | undefined): UseProductDetailsResult {
  const [product, setProduct] = useState<Product | null>(null);
  const [emiPlans, setEmiPlans] = useState<EmiPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDetails = useCallback(async () => {
    if (!productId) {
      setError("No product specified.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const fetchedProduct = await getProductById(productId);
      if (!fetchedProduct) {
        setError("Product not found.");
        setProduct(null);
        setEmiPlans([]);
        return;
      }
      setProduct(fetchedProduct);

      const fetchedPlans = await getEmiPlansByIds(fetchedProduct.emiPlanIds);
      setEmiPlans(fetchedPlans);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [productId]);

 useEffect(() => {
  // Data fetching on mount is a standard, documented useEffect use case;
  // this rule's "avoid setState in effect" guidance targets derived-state
  // resets (which have a render-time alternative), not async data fetching.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchDetails();
}, [fetchDetails]);

  return { product, emiPlans, loading, error, retry: fetchDetails };
}