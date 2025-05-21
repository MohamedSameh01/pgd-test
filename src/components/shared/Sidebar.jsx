import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { sidebarItems } from "../../utils/data";
import dashboardIcon from "../../assets/icons/sidebar/dashboard-square-01.png";
import SidebarFooter from "../sidebar/SidebarFooter";
import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarItem from "../sidebar/sidebarItem";
import CollabseButton from "../sidebar/CollabseButton";

const Sidebar = () => {
  const mainItem = { icon: dashboardIcon, text: "لوحة المعلومات" };
  const [open, setOpen] = useState(false);

  // handle function for collabse the sidebar
  const handleCollabseSidebar = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <aside
      className={`max-h-screen border-l border-[#E0E0E0] flex flex-col justify-between shadow-md transition-all duration-300
        relative lg:relative max-md:absolute max-md:right-0 max-md:top-0 max-md:bottom-0 max-md:z-50 max-md:bg-white
        ${open ? "px-0 w-0" : "lg:min-w-[280px] lg:max-w-[320px] lg:w-[22%] max-md:w-[350px] px-2"}
      `}
    >
    
      {!open && (
        <>
          {/* Header */}
          <SidebarHeader />
          {/* base menu item */}
          <Link to={"/"}>
            <SidebarItem
              text={mainItem.text}
              icon={mainItem.icon}
              arrow={false}
            />
          </Link>
          <span className="font-bold ms-2 mt-2">القوائم</span>
          {/* menue items */}
          <nav className="flex-1 flex flex-col gap-1 mt-4 ">
            {sidebarItems.map((item, idx) => (
              <SidebarItem text={item.text} icon={item.icon} key={idx} />
            ))}
          </nav>
          <SidebarFooter />
        </>
      )}
      <CollabseButton
        handleCollabseSidebar={handleCollabseSidebar}
        open={open}
      />
    </aside>
  );
};

export default Sidebar;
