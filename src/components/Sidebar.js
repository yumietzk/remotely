import { Link } from "react-router-dom";
import {
  CiGrid41,
  CiUser,
  CiReceipt,
  CiSearch,
  CiGlobe,
  CiSettings,
  CiTrash,
} from "react-icons/ci";
import { data } from "../data/sidebarData";

function renderIcon(text) {
  const className = "mr-2 w-5 h-5";

  switch (text) {
    case "Dashboard": {
      return <CiGrid41 className={className} />;
    }

    case "My Profile": {
      return <CiUser className={className} />;
    }

    case "My Jobs": {
      return <CiReceipt className={className} />;
    }

    case "Search Jobs": {
      return <CiSearch className={className} />;
    }

    case "News": {
      return <CiGlobe className={className} />;
    }

    case "Account Settings": {
      return <CiSettings className={className} />;
    }

    case "Delete Account": {
      return <CiTrash className={className} />;
    }

    default: {
      return null;
    }
  }
}

function Sidebar() {
  return (
    <nav className="w-max max-w-xs h-full p-5 text-center">
      <h1 className="text-2xl font-medium font-secondary mb-7">Remotely 🌎</h1>
      <ul className="space-y-2 list-none">
        {/* 💡 Add active status later, maybe with using NavLink? */}
        {data.map((item, i) => (
          <li
            key={item.nav}
            className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-500 hover:text-white"
          >
            <Link to={item.path} className="flex items-center">
              {renderIcon(item.nav)}
              {item.nav}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
