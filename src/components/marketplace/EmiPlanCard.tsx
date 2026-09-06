import type { EmiPlan } from "../../types/emi";
import "./EmiPlanCard.css";

interface EmiPlanCardProps {
  plan: EmiPlan;
  isSelected: boolean;
  onSelect: () => void;
}

function EmiPlanCard({ plan, isSelected, onSelect }: EmiPlanCardProps) {
  return (
    <button
      className={`emi-plan-card ${isSelected ? "emi-plan-selected" : ""} ${
        !plan.available ? "emi-plan-disabled" : ""
      }`}
      onClick={onSelect}
      disabled={!plan.available}
    >
      <span className={`emi-radio ${isSelected ? "emi-radio-checked" : ""}`} />
      <div className="emi-plan-info">
        <p className="emi-plan-main">
          ₹{plan.monthlyAmount.toLocaleString("en-IN")} × {plan.durationMonths} months
        </p>
        <p className="emi-plan-sub">
          {plan.interestRate === 0 ? "No-cost EMI" : `${plan.interestRate}% interest`}
          {plan.processingFee > 0 && ` · ₹${plan.processingFee} processing fee`}
          {!plan.available && " · Currently unavailable"}
        </p>
      </div>
    </button>
  );
}

export default EmiPlanCard;