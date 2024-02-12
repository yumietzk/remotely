import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen w-screen flex font-primary font-normal text-base text-green-500 z-0">
      <Sidebar />

      <div className="flex-1 bg-green-50 w-full h-full overflow-hidden py-9 rounded-l-3xl flex flex-col">
        <Header />
        <Outlet />
      </div>

      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default AppLayout;
