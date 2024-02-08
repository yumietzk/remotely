import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div className="w-full grid xl:grid-cols-job-grid-xl">
      <div className="col-start-2 grid grid-cols-job-list-xl 2xl:grid-cols-job-list-2xl gap-4 2xl:gap-6">
        {jobs.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
