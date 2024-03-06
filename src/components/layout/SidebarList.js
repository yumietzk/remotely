import { Link, useLocation } from "react-router-dom";
import {
  CiGrid41,
  CiUser,
  CiReceipt,
  CiSearch,
  CiGlobe,
  CiTrash,
} from "react-icons/ci";

function renderIcon(text, isCollapsed) {
  const className = `w-5 h-5 ${!isCollapsed && "mr-2"}`;

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

function SidebarList({ item, isCollapsed }) {
  const { pathname } = useLocation();
  const currentPath = pathname.slice(1);

  const { nav, path } = item;

  return (
    <div className="relative group">
      <ul className="list-none">
        <li>
          <Link
            to={path}
            className={`flex items-center p-2.5 xl:py-3 xl:px-3.5 rounded-xl cursor-pointer ${
              currentPath === path && "bg-green-500 text-white"
            } transition duration-300 hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
          >
            {renderIcon(nav, isCollapsed)}
            {!isCollapsed && nav}
          </Link>
        </li>
      </ul>

      {isCollapsed && (
        <p className="invisible group-hover:visible absolute top-1/2 -translate-y-1/2 left-[110%] z-10 bg-gradient-to-l from-green-400 to-green-300 text-white text-sm px-2.5 py-1 rounded-full">
          {nav}
        </p>
      )}
    </div>
  );
}

export default SidebarList;
