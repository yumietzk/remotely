import { useLocation } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import Location from "../Location";
import UserIcon from "../UserIcon";
import { data } from "../../data/sidebarData";

function Header() {
  const { pathname } = useLocation();
  const {
    profileData: { firstName },
  } = useUser();

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
