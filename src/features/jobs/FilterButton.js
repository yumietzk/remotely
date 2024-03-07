import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import Button from "../../components/elements/Button";

function FilterButton({ openFilter, setOpenFilter }) {
  return (
    <Button
      classes="bg-green-50 py-2 px-3 rounded-lg text-xs lg:text-sm text-current cursor-pointer flex items-center justify-between hover:bg-green-100 focus:ring-offset-green-50"
      label="filter"
      handleClick={() => setOpenFilter(!openFilter)}
    >
      {openFilter ? (
        <CiCircleChevUp className="h-4 w-4 lg:h-5 lg:w-5 mr-1" />
      ) : (
        <CiCircleChevDown className="h-4 w-4 lg:h-5 lg:w-5 mr-1" />
      )}
      Filters
    </Button>
  );
}

export default FilterButton;
