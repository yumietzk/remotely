import TableTop from "./TableTop";
import JobGrid from "./JobGrid";

function JobTable({
  jobs,
  searchTerm,
  setSearchTerm,
  filterList,
  handleDeleteSelected,
}) {
  const numOfJobs = jobs.length;

  return (
    <main className="w-full">
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
