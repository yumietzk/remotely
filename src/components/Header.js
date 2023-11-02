import Location from "./Location";
import UserIcon from "./UserIcon";

function Header() {
  return (
    <header className="text-white-primary flex items-center mb-8">
      <h2 className="flex-none mr-16 font-semibold text-2xl">
        Good morning, Ollie!
      </h2>
      <div className="flex-1 flex justify-end">
        <UserIcon />
        <Location />
      </div>
    </header>
  );
}

export default Header;
