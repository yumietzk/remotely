import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { supabase } from "../services/supabase";

function UserAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!email || !password) return;

    const signUp = async () => {
      const { data, error } = await supabase.auth.signUp({
        email: "example@email.com",
        password: "example-password",
      });
    };

    signUp();
  }, [email, password]);

  return (
    <div className="px-12 py-9 bg-background-primary row-span-2 flex justify-center items-center">
      Your profile here
      <Outlet />
    </div>
  );
}

export default UserAccount;
