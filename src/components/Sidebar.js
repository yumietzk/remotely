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

function Sidebar() {
  return (
    <nav className="w-max max-w-xs h-full p-5 text-center">
      <h1 className="text-2xl font-medium font-secondary mb-7">
        Remote from 🌎
      </h1>
      <ul className="space-y-2 list-none">
        {/* 💡 Add active status later, maybe with using NavLink? */}
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiGrid41 className="mr-2 w-5 h-5" />
            Dashboard
          </Link>
        </li>
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiUser className="mr-2 w-5 h-5" />
            My Profile
          </Link>
        </li>
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiReceipt className="mr-2 w-5 h-5" />
            My Jobs
          </Link>
        </li>
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiSearch className="mr-2 w-5 h-5" />
            Search Jobs
          </Link>
        </li>
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiGlobe className="mr-2 w-5 h-5" />
            News
          </Link>
        </li>
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiSettings className="mr-2 w-5 h-5" />
            Account Settings
          </Link>
        </li>
        <li className="py-3 px-3.5 rounded-xl cursor-pointer transition duration-300 hover:bg-green-400 hover:text-white">
          <Link to="" className="flex items-center">
            <CiTrash className="mr-2 w-5 h-5" />
            Delete Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
