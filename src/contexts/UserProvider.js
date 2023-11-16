import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  }

  useEffect(() => {
    getUser();
  }, []);

  const value = { user, getUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of the UserProvider");

  return context;
}

export { UserProvider, useUser };
