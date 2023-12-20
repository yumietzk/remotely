import { useLocation } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import Location from "../Location";
import UserIcon from "../UserIcon";
import { data } from "../../data/sidebarData";

function Header() {
  const { pathname } = useLocation();
  const { profile } = useProfile();

  const targetItem = data.find((item) => item.path === pathname?.slice(1));
  const title =
    targetItem.path === "dashboard"
      ? profile?.first_name
        ? `Good morning, ${profile?.first_name}!`
        : ""
      : targetItem.nav;

  return (
    <header className="w-full h-8 text-white-primary flex justify-between items-center mb-10">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div className="flex-1 flex justify-end">
        <UserIcon />
        <Location />
      </div>
    </header>
  );
}

export default Header;
