import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../contexts/UserProvider";
import { supabase } from "../../services/supabase";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  const [profile, setProfile] = useState({});

  const {
    user: { id },
  } = useUser();

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select()
        .eq("id", id);

      if (error) {
        throw error;
      }

      setProfile(data[0]);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="h-screen w-screen flex font-primary font-normal text-base text-green-500 z-0">
      <Sidebar />

      <div className="flex-1 bg-green-50 w-full h-full overflow-hidden py-9 rounded-l-3xl flex flex-col">
        <Header profile={profile} />
        <Outlet context={[profile, getProfile]} />
      </div>

      <ToastContainer autoClose={5000} />
    </div>
  );
}

export default AppLayout;
