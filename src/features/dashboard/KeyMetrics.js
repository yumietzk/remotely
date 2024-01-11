import {
  CiPaperplane,
  CiMobile3,
  CiDesktop,
  CiFaceSmile,
} from "react-icons/ci";

const metrics = ["Applied", "First Interview", "Final Interview", "Offered"];

function renderIcon(text) {
  const className = "w-11 h-11 p-3 bg-accent text-white rounded-full";

  switch (text) {
    case "Applied": {
      return <CiPaperplane className={className} />;
    }

    case "First Interview": {
      return <CiMobile3 className={className} />;
    }

    case "Final Interview": {
      return <CiDesktop className={className} />;
    }

    case "Offered": {
      return <CiFaceSmile className={className} />;
    }

    default: {
      return null;
    }
  }
}

function KeyMetrics({ trackingJobs }) {
  return (
    <div className="col-span-2 grid grid-cols-4 gap-6">
      {metrics.map((item) => {
        const jobs = trackingJobs.filter((job) => job.status === item);
        const numOfJobs = jobs.length;

        return (
          <div
            key={item}
            className="bg-white rounded-xl flex items-center justify-between p-6"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-medium">{numOfJobs}</span>
              <span className="text-sm text-gray-200">{item}</span>
            </div>
            {renderIcon(item)}
          </div>
        );
      })}
    </div>
  );
}

export default KeyMetrics;
