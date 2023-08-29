import { Link } from "react-router-dom";

const nav = ["Search jobs", "Recommended", "Blog"];
const path = ["search", "recommended", "blog"];

function HeaderNav() {
  return (
    <nav className="flex-1 h-full">
      <ul className="h-full flex items-center space-x-10">
        {nav.map((item, i) => (
          <li
            key={item}
            className="h-full flex items-center cursor-pointer hover:text-white hover:border-b-[0.3px] hover:border-white-primary"
          >
            <Link to={`/${path[i]}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
