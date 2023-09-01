import Job from "./Job";

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
