import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (!user) return;

    getProfileData();
  }, [user]);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  }

  // 💡get user data here too
  async function getProfileData() {
    const { data, error } = await supabase.from("profiles").select();

    if (error) return;
    setProfileData(data[0]);
  }

  const value = { user, profileData, getUser, getProfileData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("UserContext was used outside of the UserProvider");
  }

  return context;
}

export { UserProvider, useUser };
