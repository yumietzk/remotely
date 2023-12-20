import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import Button from "../../components/elements/Button";

function FilterButton({ openFilter, setOpenFilter }) {
  return (
    <Button
      classes="bg-green-50 py-2 px-3 rounded-lg text-sm text-current cursor-pointer flex items-center justify-between focus:ring-offset-green-100"
      handleClick={() => setOpenFilter(!openFilter)}
    >
      {openFilter ? (
        <CiCircleChevUp className="h-5 w-5 mr-1" />
      ) : (
        <CiCircleChevDown className="h-5 w-5 mr-1" />
      )}
      Filters
    </Button>
  );
}

export default FilterButton;
