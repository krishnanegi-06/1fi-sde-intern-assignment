export interface EmiPlan{
  id : string;
  durationMonths: number;
  monthlyAmount: number;
  totalAmount: number;
  interestRate: number;
  processingFee: number;
  available : boolean;
  
}