import JobCard from "./JobCard";

function JobList({ jobs, trackingJobs, getTrackingJobs }) {
  return (
    <div className="w-full grid grid-cols-job-grid md:grid-cols-job-grid-md lg:grid-cols-job-grid-lg xl:grid-cols-job-grid-xl">
      <div className="col-start-2 lg:grid lg:grid-cols-job-list-lg xl:grid-cols-job-list-xl gap-3 lg:gap-7 xl:gap-4">
        {jobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              job={job}
              trackingJobs={trackingJobs}
              getTrackingJobs={getTrackingJobs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default JobList;
