import { CiCircleRemove } from "react-icons/ci";
import SelectedFilterList from "./SelectedFilterList";
import Button from "../../components/elements/Button";

function TableTop({
  filterList,
  handleDeleteSelected,
  searchTerm,
  numOfJobs,
  setSearchTerm,
}) {
  return (
    <div className="mb-8 flex items-center relative">
      {/* All jobs / Recommended jobs / {search term} jobs */}
      <h2 className="text-4xl font-bold mr-5">
        {searchTerm ? searchTerm : "All"} jobs
      </h2>
      <span className="mr-5 px-3.5 py-1 rounded-3xl border border-gray-200 text-2xl font-bold">
        {numOfJobs}
      </span>

      <SelectedFilterList
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
      />

      {/* <Sort /> */}

      {searchTerm && (
        <Button
          classes="border-none rounded-full absolute -left-7"
          callback={() => setSearchTerm("")}
        >
          <CiCircleRemove className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}

export default TableTop;
