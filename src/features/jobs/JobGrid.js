import { useState } from "react";
import JobList from "./JobList";
import Pagination from "../../components/elements/Pagination";

function JobGrid({ jobs }) {
  const [currentPage, setCurrentPage] = useState(1);

  // jobs = [{}, {}, {}] 30
  // 1 -> 0 ~ 11, 12~23, 24~29
  const jobsPerPage = 12; // ⭐️ 12
  const pages = Math.ceil(jobs.length / jobsPerPage);

  const curJobList = jobs.slice(
    jobsPerPage * (currentPage - 1),
    jobsPerPage * currentPage
  );

  function handleNextPage() {
    setCurrentPage((cur) => cur + 1);
  }

  function handlePreviousPage() {
    setCurrentPage((cur) => cur - 1);
  }

  return (
    <div>
      <JobList jobs={curJobList} />

      <Pagination
        currentPage={currentPage}
        pages={pages}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}

export default JobGrid;
