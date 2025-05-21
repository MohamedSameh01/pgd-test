
const TextArea = ({label,rows=3,className}) => {
  return (
    <div className={`${className} flex flex-col w-full`}>
      <label className="text-base block font-medium text-gray-700 mb-2">
        {label}
      </label>
      <textarea
        rows={rows}
        className="border border-[#D9D9D9] rounded-[4px] p-2 bg-grayColor focus:outline-none focus:border-[#40A9FF] text-[13px] resize-none"
      ></textarea>
    </div>
  );
}

export default TextArea