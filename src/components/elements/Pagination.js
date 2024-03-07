import Button from "./Button";

// Expected pagination:
// Selected page 1: [1, 2, 3, "...", 20]
// Selected page 2: [1, 2, 3, 4, "...", 20]
// Selected page 3: [1, 2, 3, 4, 5, "...", 20]
// Selected page 4: [1, 2, 3, 4, 5, 6, "...", 20]
// Selected page 5: [1, 2, 3, 4, 5, 6, 7, "...", 20]
// Selected page 6: [1, "...", 4, 5, 6, 7, 8, "...", 20]

// Selected page 15: [1, "...", 13, 14, 15, 16, 17, "...", 20]
// Selected page 16: [1, "...", 14, 15, 16, 17, 18, 19, 20]
// Selected page 17: [1, "...", 15, 16, 17, 18, 19, 20]
// Selected page 18: [1, "...", 16, 17, 18, 19, 20]
// Selected page 19: [1, "...", 17, 18, 19, 20]
// Selected page 20: [1, "...", 18, 19, 20]

function Pagination({ currentPage, totalPages, handleSetPage }) {
  let pagination;

  if (totalPages <= 1) {
    pagination = [1];
  } else {
    const center = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];

    let filteredCenter = center.filter((page) => page > 1 && page < totalPages);

    const includeThreeLeft = currentPage === 5;
    const includeThreeRight = currentPage === totalPages - 4;
    const includeLeftDots = currentPage > 5;
    const includeRightDots = currentPage < totalPages - 4;

    if (includeThreeLeft) filteredCenter.unshift(2);
    if (includeThreeRight) filteredCenter.push(totalPages - 1);

    if (includeLeftDots) filteredCenter.unshift("...");
    if (includeRightDots) filteredCenter.push("...");

    pagination = [1, ...filteredCenter, totalPages];
  }

  return (
    <div className="space-x-2.5">
      {pagination.map((num) => (
        <Button
          key={num}
          classes={`text-sm lg:text-base ${
            num === currentPage ? "text-current font-medium" : "text-gray-100"
          }`}
          label="pagination"
          handleClick={() => handleSetPage(num)}
          disabled={num === currentPage || num === "..."}
        >
          {num}
        </Button>
      ))}
    </div>
  );
}

export default Pagination;
