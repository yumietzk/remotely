import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;

    getProfiles();
  }, [user]);

  // 💡get user data here too
  async function getProfiles() {
    const { data, error } = await supabase.from("profiles").select();

    if (error) return;
    setProfileData(data[0]);
  }

  const value = { user, profileData, getProfiles };

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
