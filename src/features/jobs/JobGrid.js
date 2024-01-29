import { useState } from "react";
import JobList from "./JobList";
import Pagination from "../../components/elements/Pagination";

function JobGrid({ jobs }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Display 12 jobs per page
  const jobsPerPage = 12;
  const pages = Math.ceil(jobs.length / jobsPerPage);

  const currentJobList = jobs.slice(
    jobsPerPage * (currentPage - 1),
    jobsPerPage * currentPage
  );

  function handleSetPage(page) {
    setCurrentPage(page);
  }

  function handleNextPage() {
    setCurrentPage((cur) => cur + 1);
  }

  function handlePreviousPage() {
    setCurrentPage((cur) => cur - 1);
  }

  if (currentJobList.length === 0) {
    return (
      <p>No jobs are currently available. Please try searching again 🙂</p>
    );
  }

  return (
    <div>
      <JobList jobs={currentJobList} />

      <Pagination
        currentPage={currentPage}
        pages={pages}
        onSetPage={handleSetPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}

export default JobGrid;
