import { useLocation } from "react-router-dom";
import { useProfile } from "../../hooks/useProfile";
import Location from "../Location";
import UserIcon from "../UserIcon";
import { data } from "../../data/sidebarData";

function Header() {
  const { pathname } = useLocation();
  const { profile } = useProfile();

  const targetItem = data.find((item) => item.path === pathname?.slice(1));

  const hours = new Date().getHours();
  const greeting =
    hours >= 5 && hours < 12
      ? "morning"
      : hours >= 12 && hours < 17
      ? "afternoon"
      : "evening";

  const title =
    targetItem.path === "dashboard"
      ? profile?.first_name
        ? `Good ${greeting}, ${profile?.first_name}!`
        : "Hello!"
      : targetItem.nav;

  return (
    <header className="w-full px-11 h-8 text-white-primary flex justify-between items-center mb-10">
      <h2
        className={`${
          targetItem.path === "dashboard"
            ? "text-[21px] font-medium"
            : "text-[26px] font-semibold"
        }`}
      >
        {title}
      </h2>
      <div className="flex-1 flex justify-end">
        <Location />
        <UserIcon />
      </div>
    </header>
  );
}

export default Header;
