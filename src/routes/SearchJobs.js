import JobListTop from "../components/JobListTop";
import JobList from "../components/JobList";

function SearchJobs({
  filterList,
  handleDeleteSelected,
  jobs,
  searchTerm,
  handleResetSearch,
}) {
  const numOfJobs = jobs.length;

  return (
    // ⚠️ 横幅広げた時に今の状態だと不自然な空間ができる時がある
    // pl-10
    <div className="col-start-3 pl-6">
      <JobListTop
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
        searchTerm={searchTerm}
        numOfJobs={numOfJobs}
        handleResetSearch={handleResetSearch}
      />
      <JobList jobs={jobs} />
    </div>
  );
}

export default SearchJobs;
