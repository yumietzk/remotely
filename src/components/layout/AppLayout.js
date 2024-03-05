import { useCallback, useEffect, useState } from "react";
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

  const getProfile = useCallback(async () => {
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
  }, [id]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="h-screen w-screen font-primary font-normal text-base text-green-500 z-0">
      <div className="h-full max-w-[1440px] w-full mx-auto flex">
        <Sidebar />

        <div className="flex-1 bg-green-50 w-full h-full overflow-hidden py-6 lg:py-7 rounded-l-3xl flex flex-col">
          <Header profile={profile} />
          <Outlet context={[profile, getProfile]} />
        </div>

        <ToastContainer autoClose={5000} />
      </div>
    </div>
  );
}

export default AppLayout;
