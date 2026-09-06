import "./States.css";
function EmptyState({ message = "No results found" }: { message?: string }) {
  return <div className="state-message">{message}</div>;
}

export default EmptyState;