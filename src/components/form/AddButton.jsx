
const AddButon = ({ text, className, icon }) => {
  return (
    <button
      className={`flex items-center justify-center gap-1.5 text-brownColor  bg-lightBrownColor  border-brownColor rounded-xl  font-medium py-1.5 px-4  border  text-base h-[42px] w-[136px] hover:scale-105 transition-all ${className}`}
    >
      {icon && <img src={icon} alt="icon" />}
      <span>{text}</span>
    </button>
  );
};

export default AddButon 