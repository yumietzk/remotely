import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import Location from "./Location";
import UserIcon from "./UserIcon";

function Header() {
  return (
    // "/"の時は背景白、それ以外は黒???
    // bg-background-secondary
    <header className="bg-white text-white-primary px-12 flex items-center">
      <div className="flex-none py-9 mr-16 font-bold">
        <Link to="/">🌎 Remote from 🇯🇵</Link>
      </div>
      <HeaderNav />
      <Location />
      <UserIcon />
    </header>
  );
}

export default Header;
