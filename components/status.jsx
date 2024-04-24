const Status = ({ status, className = "" }) => {
  return (
    <span
      title={status}
      role="status"
      className={`w-4 h-4 ${
        status === "active" ? "bg-green-500" : "bg-red-500"
      } rounded-full ${className}`}
    />
  );
};

export default Status;
