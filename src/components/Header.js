import HeaderNav from "./HeaderNav";
import Location from "./Location";
import UserAccount from "./UserAccount";

function Header() {
  return (
    <div className="bg-background-secondary text-white-primary px-12 py-9 border-b-[0.3px] border-white-secondary flex items-center">
      <div className="flex-none mr-16 font-bold">🌎 Remote from 🇯🇵</div>
      <HeaderNav />
      <Location />
      <UserAccount />
    </div>
  );
}

export default Header;
