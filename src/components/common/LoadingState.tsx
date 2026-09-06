import "./States.css";
function LoadingState({ message = "Loading..." }: { message?: string }) {
  return <div className="state-message">{message}</div>;
}

export default LoadingState;