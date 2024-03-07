import { useEffect, useState } from "react";
import SidebarList from "./SidebarList";
import { data } from "../../data/sidebarData";

function Sidebar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 1024) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [screenWidth]);

  return (
    <nav className="w-max max-w-xs h-full px-2.5 py-5 xl:p-5 text-center">
      <h1 className="text-2xl font-medium font-secondary mb-7">
        {isCollapsed ? "🌎" : "Remotely 🌎"}
      </h1>
      <div className="space-y-2 list-none">
        {data.map((item) => (
          <SidebarList key={item.nav} item={item} isCollapsed={isCollapsed} />
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
