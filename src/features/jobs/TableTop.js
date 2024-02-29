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
      <h2 className="flex-none w-max text-3xl lg:text-4xl font-bold mr-3.5 lg:mr-5 ml-1 lg:ml-0">
        {searchTerm ? searchTerm : "All"} jobs
      </h2>

      <span className="flex-none w-max mr-5 px-3.5 py-1 rounded-3xl border border-gray-200 text-xl lg:text-2xl font-bold flex justify-center items-center">
        {numOfJobs}
      </span>

      <SelectedFilterList
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
      />

      {searchTerm && (
        <Button
          classes="border-none rounded-full absolute -left-4 lg:-left-7 focus:ring-offset-green-100 z-10"
          handleClick={() => setSearchTerm("")}
        >
          <CiCircleRemove className="w-5 h-5 lg:w-6 lg:h-6" />
        </Button>
      )}
    </div>
  );
}

export default TableTop;
