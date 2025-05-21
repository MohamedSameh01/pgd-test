const SelectBox = ({ data, label, required, size, className, defaultValue, value, onChange }) => {
  //  const customStyle = size ? `w-[${size}%]` : "w-[250px]";
  return (
    <div className={className}>
      <label className="text-base block font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <select
        defaultValue={defaultValue || "اختر..."}
        value={value}
        onChange={onChange}
        className="border w-full h-14 cursor-pointer border-gray-300 rounded-xl p-2 px-4 bg-grayColor focus:outline-none focus:border-blue-500"
      >
        <option value="" className="cursor-pointer">اختر...</option>
        {data &&
          data.map((el, index) => (
            <option key={index} className="cursor-pointer" value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectBox;
