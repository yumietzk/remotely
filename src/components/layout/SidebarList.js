import { Link, useLocation } from "react-router-dom";
import {
  CiGrid41,
  CiUser,
  CiReceipt,
  CiSearch,
  CiGlobe,
  CiSettings,
  CiTrash,
} from "react-icons/ci";

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

function SidebarList({ item }) {
  const { pathname } = useLocation();
  const currentPath = pathname.slice(1);

  const { nav, path } = item;

  return (
    <li
      className={`py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-500 hover:text-white ${
        currentPath === path && "bg-green-500 text-white"
      }`}
    >
      <Link to={path} className="flex items-center">
        {renderIcon(nav)}
        {nav}
      </Link>
    </li>
  );
}

export default SidebarList;
