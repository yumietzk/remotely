import HeaderNav from "./HeaderNav";
import Location from "./Location";
import UserAccount from "./UserAccount";

function Header() {
  return (
    <header className="bg-background-secondary text-white-primary px-12 flex items-center">
      <div className="flex-none py-9 mr-16 font-bold">🌎 Remote from 🇯🇵</div>
      <HeaderNav />
      <Location />
      <UserAccount />
    </header>
  );
}

export default Header;
