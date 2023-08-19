import Job from "./Job";
import { BiSortAlt2 } from "react-icons/bi";

function getBackgroundColor(index) {
  const num = index % 4;
  let color;

  switch (num) {
    case 0: {
      color = "bg-accent-1";
      break;
    }
    case 1: {
      color = "bg-accent-2";
      break;
    }
    case 2: {
      color = "bg-accent-3";
      break;
    }
    case 3: {
      color = "bg-accent-4";
      break;
    }
    default: {
      color = "bg-background-secondary";
      break;
    }
  }

  return color;
}

function JobList({ jobs }) {
  return (
    // pl-10
    <div className="col-start-3 pl-6">
      <div className="mb-10 flex items-center">
        <h2 className="text-4xl font-bold mr-5">All jobs</h2>
        <span className="px-3 py-1 rounded-3xl border border-white-secondary text-2xl font-bold">
          100
        </span>
        <p className="self-end ml-auto font-medium flex items-center">
          <span className="text-white-secondary">Sort by:&nbsp;</span>Last
          updated
          <button className="ml-3.5 text-xl flex items-center">
            <BiSortAlt2 />
          </button>
        </p>
      </div>
      {/* ⚠️ job-listのrepeat回数と横幅はブレイクポイント、画面幅によって変える */}
      <div className="w-full grid grid-cols-job-list gap-6">
        {/* width 310, height 400 */}
        {jobs.map((job, i) => {
          const color = getBackgroundColor(i);

          return <Job key={job.id} job={job} bgColor={color} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
