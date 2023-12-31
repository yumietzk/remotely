import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen w-screen flex font-primary font-normal text-base text-green-500 z-0">
      <Sidebar />

      <div className="flex-1 bg-green-50 h-full overflow-y-scroll py-5 px-9 rounded-l-3xl flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
