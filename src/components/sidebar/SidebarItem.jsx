import arrowDown from "../../assets/icons/sidebar/arrow-down.png";

const SidebarItem = ({ text,icon,arrow=true }) => {
  return (
    <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg hover:bg-grayColor transition text-right text-sm text-gray-700">
      <img src={icon} alt="icon" className="w-[24px] h-[24px] flex-shrink-0" />
      <span className="flex-1 text-sm truncate">
        {text}
      </span>

      {arrow && (
        <img src={arrowDown} alt="arrow" className="w-[24px] h-[24px] ml-2 flex-shrink-0" />
      )}
    </button>
  );
};

export default SidebarItem;
