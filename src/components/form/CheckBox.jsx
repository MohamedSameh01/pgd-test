const CheckBox = ({ label, name, className,cols=1 }) => {
  return (
    <div
      className={`${className}  flex items-center gap-2 col-span-full md:col-span-${cols} mt-auto`}
    >
      <input
        type="checkbox"
        name={name}
       
        className="form-checkbox w-5 h-5 text-[#BFAE8F] rounded-xl border-gray-300 focus:gray-200 focus:ring-offset-0 cursor-pointer"
      />
      <label
      
        className="text-base font-medium text-gray-700 cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;