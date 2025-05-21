
const BaseButton = ({type,text,className}) => {
    const customStyle =
      type === "cancel"
        ? "bg-grayColor text-text-gray-700"
        : type === "details"
        ? "bg-lightYelloColor text-brownColor"
        : "bg-brownColor text-grayColor";
  return (
    <button
      className={`flex items-center justify-center rounded-xl  font-medium py-1.5 px-4  text-base h-[42px] w-[136px] hover:scale-105 transition-all  ${customStyle} ${className}`}
    >
      {text}
    </button>
  );
}

export default BaseButton