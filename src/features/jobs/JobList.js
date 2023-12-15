import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    // ⚠️ job-listのrepeat回数と横幅はブレイクポイント、画面幅によって変える
    <div className="w-full grid grid-cols-job-list gap-6">
      {/* width 310, height 400 */}
      {jobs.map((job) => {
        return <JobCard key={job.id} job={job} />;
      })}
    </div>
  );
}

export default JobList;
