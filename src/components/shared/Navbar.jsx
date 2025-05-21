import notificationIcon from "../../assets/icons/content/notification.png";
import chatsIcon from "../../assets/icons/content/chats.png";
import frameIcon from "../../assets/icons/content/Frame 16.png";
import HeaderIcon from "../navbar/HeaderIcon";
import HeadingTitle from "../navbar/HeadingTitle";
import { Link } from "react-router-dom";

const Navbar = () => {
  
return (
  <div className="flex items-center justify-between bg-grayColor rounded-xl p-4 shadow-sm mt-2 ">
    <HeadingTitle title="لوحة المعلومات" />

    <div className="flex items-center gap-8">
      {/* notification and chat icons  */}
      <div className="flex items-center gap-2">
        <HeaderIcon image={notificationIcon} alt="notificationIcon" />
        <Link to="inbox">
          <HeaderIcon
            image={chatsIcon}
            alt="chatsIcon"
            onClick={() => navigate("/inbox")}
          />
        </Link>
      </div>
      {/* Avatar (now smaller) */}
      <HeaderIcon image={frameIcon} alt="user" />
    </div>
  </div>
);  
}

export default Navbar;
