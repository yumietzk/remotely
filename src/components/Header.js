import { useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";
import Location from "./Location";
import UserIcon from "./UserIcon";
import { data } from "../sidebarData";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Header() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [country, setCountry] = useState("");
  // const [error, setError] = useState("");

  const { pathname } = useLocation();
  // const { user } = useUser();

  const {
    profileData: { firstName },
  } = useUser();

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       setError("");

  //       const { data, error } = await supabase.from("profiles").select();

  //       if (error) throw new Error(`Something went wrong: ${error.message}`);

  //       const { firstName, country } = data[0];
  //       setUserName(firstName);
  //       setCountry(country);
  //     } catch (err) {
  //       console.error(error);
  //       setError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const targetItem = data.find((item) => item.path === pathname?.slice(1));
  const title =
    targetItem.path === "dashboard"
      ? firstName
        ? `Good morning, ${firstName}!`
        : ""
      : targetItem.nav;

  return (
    <header className="text-white-primary flex items-center mb-10">
      <h2 className="flex-none mr-16 font-semibold text-2xl">{title}</h2>
      <div className="flex-1 flex justify-end">
        <UserIcon />
        <Location />
      </div>
    </header>
  );
}

export default Header;
