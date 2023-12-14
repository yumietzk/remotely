import SidebarList from "./SidebarList";
import { data } from "../../data/sidebarData";

function Sidebar() {
  return (
    <nav className="w-max max-w-xs h-full p-5 text-center">
      <h1 className="text-2xl font-medium font-secondary mb-7">Remotely 🌎</h1>
      <ul className="space-y-2 list-none">
        {data.map((item) => (
          <SidebarList key={item.nav} item={item} />
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
