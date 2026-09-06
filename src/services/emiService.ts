import type { EmiPlan } from "../types/emi";
import { emiPlans } from "../data/emiPlans";

const SIMULATED_DELAY_MS = 500;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getEmiPlansByIds(ids: string[]): Promise<EmiPlan[]> {
  await delay(SIMULATED_DELAY_MS);
  return emiPlans.filter((plan) => ids.includes(plan.id));
}