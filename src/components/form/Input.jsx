const Input = ({label, type="text", placeholder="", required, defaultValue, value, onChange, size, className, cols=1}) => {
  return (
    <div className={`${className} md:col-span-${cols}`}>
      <label className="text-base block font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="border h-14 border-gray-300 w-full rounded-xl p-2 bg-grayColor focus:outline-none focus:border-gray-200"
      />
    </div>
  );
}

export default Input