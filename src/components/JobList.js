import Job from "./Job";
import { getBackgroundColor } from "../utils/getBackgroundColor";

function JobList({ jobs }) {
  return (
    // ⚠️ job-listのrepeat回数と横幅はブレイクポイント、画面幅によって変える
    <div className="w-full grid grid-cols-job-list gap-6">
      {/* width 310, height 400 */}
      {jobs.map((job, i) => {
        const color = getBackgroundColor(i);

        return <Job key={job.id} job={job} bgColor={color} />;
      })}
    </div>
  );
}

export default JobList;
