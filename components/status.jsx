const Status = ({ status }) => {
  return (
    <div
      className={`w-4 h-4 ${
        status === "active" ? "bg-green-500" : "bg-red-500"
      } rounded-full`}
    />
  );
};

export default Status;
