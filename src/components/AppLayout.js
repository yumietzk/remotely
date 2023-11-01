import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    // <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
    <div className="h-screen w-full flex font-primary font-normal text-base text-green-400">
      <Sidebar />

      <div className="flex-1">
        <p className="bg-green-100 h-full">Header</p>
        {/* <Header /> */}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default AppLayout;
