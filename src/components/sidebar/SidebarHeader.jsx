
import logo from "../../assets/images/logo.png";

const SidebarHeader = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-2 mb-4 ">
      <div className="flex items-center gap-4 w-full bg-grayColor rounded-xl  shadow-sm">
        <img
          src={logo}
          alt="logo"
          className="w-[68px] h-[72px] rounded-full border border-[#E0E0E0]"
        />
        <div className="flex flex-col flex-1">
          <span className="text-xl font-bold text-gray-700">نظام منجز</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader