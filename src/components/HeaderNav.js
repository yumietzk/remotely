import { Link } from "react-router-dom";

const nav = ["Search jobs", "News"];
const path = ["search", "news"];

function HeaderNav() {
  return (
    <nav className="flex-1 h-full">
      <ul className="h-full flex items-center space-x-10">
        {nav.map((item, i) => (
          <li
            key={item}
            className="h-full flex items-center cursor-pointer hover:text-white hover:border-b-[0.3px] hover:border-white"
          >
            <Link to={`/${path[i]}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
