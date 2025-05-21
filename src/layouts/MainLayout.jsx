import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="w-full min-h-screen flex-1 flex flex-col justify-between">
        <div className="flex flex-col  flex-1  px-8 ">
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
