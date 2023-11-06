import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

function FilterButton({ filterOpen, setFilterOpen }) {
  return (
    // w-72
    // space-y-7

    <button
      className="bg-green-50 py-2 px-3 rounded-lg text-sm text-current cursor-pointer flex items-center justify-between outline-none focus:ring-current focus:ring-1 focus:ring-offset-2"
      onClick={() => setFilterOpen(!filterOpen)}
    >
      {filterOpen ? (
        <CiCircleChevUp className="h-5 w-5 mr-1" />
      ) : (
        <CiCircleChevDown className="h-5 w-5 mr-1" />
      )}
      Filters
    </button>
  );
}

export default FilterButton;
