import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function Pagination({ currentPage, pages, onNextPage, onPreviousPage }) {
  return (
    <div className="mt-11 flex justify-center items-center space-x-4">
      <button onClick={onPreviousPage} disabled={currentPage === 1}>
        <CiCircleChevLeft
          className={`w-8 h-8 ${
            currentPage === 1 ? "text-white-secondary" : "text-black"
          }`}
        />
      </button>
      <div className="space-x-2.5">
        {Array.from({ length: pages }, (v, i) => i + 1).map((num) => (
          <span
            key={num}
            className={
              num === currentPage
                ? "text-black font-medium"
                : "text-white-secondary"
            }
          >
            {num}
          </span>
        ))}
      </div>
      <button onClick={onNextPage} disabled={currentPage === pages}>
        <CiCircleChevRight
          className={`w-8 h-8 ${
            currentPage === pages ? "text-white-secondary" : "text-black"
          }`}
        />
      </button>
    </div>
  );
}

export default Pagination;
