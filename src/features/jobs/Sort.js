import { BiSortAlt2 } from "react-icons/bi";

function Sort() {
  return (
    <div className="self-end ml-auto font-medium flex items-center">
      <span className="text-white-secondary">Sort by:&nbsp;</span>Last updated
      <button className="ml-3.5 text-xl flex items-center">
        <BiSortAlt2 />
      </button>
    </div>
  );
}

export default Sort;
