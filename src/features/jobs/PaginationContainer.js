import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Button from "../../components/elements/Button";
import Pagination from "../../components/elements/Pagination";

function PaginationContainer({
  currentPage,
  totalPages,
  onSetPage,
  onNextPage,
  onPreviousPage,
}) {
  return (
    <div className="mt-11 mb-1.5 flex justify-center items-center space-x-4">
      <Button
        classes="rounded-full focus:ring-offset-green-100"
        handleClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        <CiCircleChevLeft
          className={`w-8 h-8 ${
            currentPage === 1 ? "text-gray-100" : "text-current"
          }`}
        />
      </Button>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handleSetPage={onSetPage}
      />

      <Button
        classes="rounded-full focus:ring-offset-green-100"
        handleClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        <CiCircleChevRight
          className={`w-8 h-8 ${
            currentPage === totalPages ? "text-gray-100" : "text-current"
          }`}
        />
      </Button>
    </div>
  );
}

export default PaginationContainer;
