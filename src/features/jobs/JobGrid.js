import { useEffect, useRef, useState } from "react";
import JobList from "./JobList";
import PaginationContainer from "./PaginationContainer";

function JobGrid({ jobs }) {
  const [currentPage, setCurrentPage] = useState(1);

  const isMounted = useRef(false);
  const jobRef = useRef(null);

  useEffect(() => {
    // Prevent useEffect from running on mount
    if (isMounted.current) {
      scrollToTop();
    } else {
      isMounted.current = true;
    }
  }, [currentPage]);

  function scrollToTop() {
    if (jobRef.current) {
      jobRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  // Display 18 jobs per page
  const jobsPerPage = 18;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

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
      <p className="text-sm lg:text-base">
        No jobs are currently available. Please try searching again 🙂
      </p>
    );
  }

  return (
    <div ref={jobRef}>
      <JobList jobs={currentJobList} />

      <PaginationContainer
        currentPage={currentPage}
        totalPages={totalPages}
        onSetPage={handleSetPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </div>
  );
}

export default JobGrid;
