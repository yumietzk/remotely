import TableTop from "./TableTop";
import JobGrid from "./JobGrid";

function JobTable({
  isLoading,
  isError,
  error,
  jobs,
  searchTerm,
  setSearchTerm,
  filterList,
  handleDeleteSelected,
}) {
  const numOfJobs = jobs.length;

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <main className="w-full">
      {/* ⚠️ 横幅広げた時に今の状態だと不自然な空間ができる時がある */}
      <TableTop
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
        searchTerm={searchTerm}
        numOfJobs={numOfJobs}
        setSearchTerm={setSearchTerm}
      />

      <JobGrid key={searchTerm || filterList} jobs={jobs} />
    </main>
  );
}

export default JobTable;
