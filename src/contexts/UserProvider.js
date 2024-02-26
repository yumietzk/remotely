import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../services/supabase";

const UserContext = createContext();

function UserProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const value = { user };

  return (
    <UserContext.Provider value={value}>
      {!isLoading && children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("UserContext was used outside of the UserProvider");
  }

  return context;
}

export { UserProvider, useUser };
