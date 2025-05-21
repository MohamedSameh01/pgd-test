import calender from "../../assets/icons/form/Calendar.png"
const DateBicker = ({required,cols=1}) => {
  return (
    <div className={`flex flex-col md:col-span-${cols} `}>
      <label className="text-base font-medium text-[#1A1A1A] mb-2">
        تاريخ المعاملة
        {required && <span className="text-[#FF4D4F] ">*</span>}
      </label>
      <div className="flex pe-4 items-center border border-gray-300 rounded-xl bg-grayColor w-full h-14">
        <select className="border-l cursor-pointer bg-transparent border-gray-300 rounded-xl p-2  focus:outline-none focus:border-gray-200 text-base h-full">
          <option>هجري</option>
          <option>ميلادي</option>
        </select>

        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className="p-2 px-4  bg-transparent w-[70%] focus:outline-none text-base rounded-xl h-full"
        />
        <span className=" h-full  flex items-center justify-center w-[40px]">
          <img
            className="w-full h-full object-contain "
            src={calender}
            alt="calender"
          />
        </span>
      </div>
    </div>
  );
}

export default DateBicker