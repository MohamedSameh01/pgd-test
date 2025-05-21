
const TransactionSwicher = ({
  selectedDataString,
  handleSwichOrdenary,
  handleSwichSecret,
}) => {
  //   styles for cleanCode
  const activeOne = "text-[#d3af6d] bg-white";
  const noneActive = "bg-transparent text-gray-400";

  return (
    <div className="flex justify-start mb-6">
      <div className="flex gap-2   rounded-xl overflow-hidden bg-grayColor p-2">
        <button
          onClick={handleSwichOrdenary}
          className={`${
            selectedDataString === "ordenaryData" ? activeOne : noneActive
          } px-8 py-2  font-bold border-none rounded-xl focus:outline-none text-lg`}
        >
          المعاملات العادية
        </button>
        <button
          onClick={handleSwichSecret}
          className={`${
            selectedDataString === "secretData" ? activeOne : noneActive
          } px-8 py-2  font-bold border-none rounded-xl focus:outline-none text-lg`}
        >
          المعاملات السرية
        </button>
      </div>
    </div>
  );
};

export default TransactionSwicher;
