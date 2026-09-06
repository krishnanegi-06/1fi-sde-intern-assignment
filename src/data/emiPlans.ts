import type { EmiPlan } from "../types/emi";
export const emiPlans: EmiPlan[]=[
  {
    id:"emi-3m",
    durationMonths: 3,
    monthlyAmount: 6500,
    totalAmount: 19500,
    interestRate: 0,
    processingFee: 0,
    available: true,
  },
   {
    id: "emi-6m",
    durationMonths: 6,
    monthlyAmount: 3500,
    totalAmount: 21000,
    interestRate: 0,
    processingFee: 199,
    available: true,
  },
  {
    id: "emi-12m",
    durationMonths: 12,
    monthlyAmount: 1900,
    totalAmount: 22800,
    interestRate: 0,
    processingFee: 199,
    available: true,
  },
  {
    id: "emi-24m",
    durationMonths: 24,
    monthlyAmount: 1050,
    totalAmount: 25200,
    interestRate: 5,
    processingFee: 299,
    available: false,
  },
];