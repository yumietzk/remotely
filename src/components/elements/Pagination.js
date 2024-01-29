import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Button from "./Button";

function Pagination({
  currentPage,
  pages,
  onSetPage,
  onNextPage,
  onPreviousPage,
}) {
  return (
    <div className="mt-11 flex justify-center items-center space-x-4">
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

      <div className="space-x-2.5">
        {Array.from({ length: pages }, (v, i) => i + 1).map((num) => (
          <button
            key={num}
            className={
              num === currentPage ? "text-current font-medium" : "text-gray-100"
            }
            onClick={() => onSetPage(num)}
            disabled={num === currentPage}
          >
            {num}
          </button>
        ))}
      </div>

      <Button
        classes="rounded-full focus:ring-offset-green-100"
        handleClick={onNextPage}
        disabled={currentPage === pages}
      >
        <CiCircleChevRight
          className={`w-8 h-8 ${
            currentPage === pages ? "text-gray-100" : "text-current"
          }`}
        />
      </Button>
    </div>
  );
}

export default Pagination;
