import ContentTop from "./ContentTop";
import JobPage from "./JobPage";

function Content({
  filterList,
  onDeleteSelected,
  jobs,
  searchTerm,
  onResetSearch,
}) {
  const numOfJobs = jobs.length;

  return (
    // pl-10
    <div className="col-start-3 pl-6">
      <ContentTop
        filterList={filterList}
        onDeleteSelected={onDeleteSelected}
        searchTerm={searchTerm}
        numOfJobs={numOfJobs}
        onResetSearch={onResetSearch}
      />

      <JobPage jobs={jobs} />
    </div>
  );
}

export default Content;
