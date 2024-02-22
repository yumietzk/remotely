import { Link, useLocation } from "react-router-dom";
import {
  CiGrid41,
  CiUser,
  CiReceipt,
  CiSearch,
  CiGlobe,
  CiTrash,
} from "react-icons/ci";

function renderIcon(text) {
  const className = "mr-2 w-5 h-5";

  switch (text) {
    case "Dashboard": {
      return <CiGrid41 className={className} />;
    }

    case "Application Tracker": {
      return <CiReceipt className={className} />;
    }

    case "Job Search": {
      return <CiSearch className={className} />;
    }

    case "News": {
      return <CiGlobe className={className} />;
    }

    case "Profile": {
      return <CiUser className={className} />;
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
    <li>
      <Link
        to={path}
        className={`flex items-center py-3 px-3.5 rounded-xl cursor-pointer ${
          currentPath === path && "bg-green-500 text-white"
        } transition duration-300 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
      >
        {renderIcon(nav)}
        {nav}
      </Link>
    </li>
  );
}

export default SidebarList;
