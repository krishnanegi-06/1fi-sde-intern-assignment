import "./PrimaryButton.css";

interface PrimaryButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function PrimaryButton({ label, onClick, disabled = false }: PrimaryButtonProps) {
  return (
    <button className="primary-button" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default PrimaryButton;