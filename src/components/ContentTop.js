import FilterItemList from "./FilterItemList";
import Sort from "./Sort";
import { CiCircleRemove } from "react-icons/ci";

function ContentTop({
  filterList,
  onDeleteSelected,
  searchTerm,
  numOfJobs,
  onResetSearch,
}) {
  return (
    <div className="mb-10 flex items-center relative">
      {/* All jobs / Recommended jobs / {search term} jobs */}
      <h2 className="text-4xl font-bold mr-5">
        {searchTerm ? searchTerm : "All"} jobs
      </h2>
      <span className="mr-5 px-3.5 py-1 rounded-3xl border border-white text-2xl font-bold">
        {numOfJobs}
      </span>

      <FilterItemList
        filterList={filterList}
        onDeleteSelected={onDeleteSelected}
      />

      {/* <Sort /> */}

      {searchTerm && (
        <button
          className="border-none absolute -left-6"
          onClick={onResetSearch}
        >
          <CiCircleRemove className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}

export default ContentTop;
