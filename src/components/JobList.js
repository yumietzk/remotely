import Job from "./Job";

function getBackgroundColor(index) {
  const num = index % 4;
  let color;

  switch (num) {
    case 0: {
      color = "accent-1";
      break;
    }
    case 1: {
      color = "accent-2";
      break;
    }
    case 2: {
      color = "accent-3";
      break;
    }
    case 3: {
      color = "accent-4";
      break;
    }
    default: {
      color = "background-secondary";
      break;
    }
  }

  return color;
}

function JobList({ jobs }) {
  return (
    <div className="flex-1 pl-10">
      <div className="text-4xl font-bold mb-10">
        All jobs
        {/* <span>100</span> */}
      </div>
      <div className="w-full grid grid-cols-job-list gap-6">
        {/* width 310, height 400 */}
        {jobs.map((job, i) => {
          const color = getBackgroundColor(i);

          return <Job key={job.id} job={job} bgColor={`bg-${color}`} />;
        })}
      </div>
    </div>
  );
}

export default JobList;
