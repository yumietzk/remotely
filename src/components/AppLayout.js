import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";
import { supabase } from "../supabase";

function AppLayout() {
  return (
    // <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
    <div className="h-screen w-full flex font-primary font-normal text-base text-green-500 z-0">
      <Sidebar />

      <div className="flex-1 bg-green-100 h-full overflow-y-scroll py-5 px-9 rounded-l-3xl">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
