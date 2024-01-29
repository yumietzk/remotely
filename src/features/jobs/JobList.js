import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    // ⚠️ Will change grid-cols-job-list later
    <div className="w-full grid grid-cols-job-list gap-6">
      {/* width 310, height 400 */}
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobList;
