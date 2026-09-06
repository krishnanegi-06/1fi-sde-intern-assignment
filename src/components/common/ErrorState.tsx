import "./States.css";
interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="state-message state-error">
      <p>{message}</p>
      <button className="retry-button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorState;