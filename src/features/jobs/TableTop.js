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
      <h2 className="flex-none w-[130px] text-4xl font-bold mr-5">
        {searchTerm ? searchTerm : "All"} jobs
      </h2>

      <span className="flex-none w-20 mr-5 px-3.5 py-1 rounded-3xl border border-gray-200 text-2xl font-bold flex justify-center items-center">
        {numOfJobs}
      </span>

      <SelectedFilterList
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
      />

      {/* <Sort /> */}

      {searchTerm && (
        <Button
          classes="border-none rounded-full absolute -left-7 focus:ring-offset-green-100"
          handleClick={() => setSearchTerm("")}
        >
          <CiCircleRemove className="w-6 h-6" />
        </Button>
      )}
    </div>
  );
}

export default TableTop;
