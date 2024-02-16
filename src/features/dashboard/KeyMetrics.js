import { CiMobile3, CiDesktop, CiFaceSmile, CiUser } from "react-icons/ci";

const metrics = [
  "First Interview",
  "Second Interview",
  "Final Interview",
  "Offered",
];

function renderIcon(text) {
  const className = "w-11 h-11 p-3 bg-accent text-white rounded-full";

  switch (text) {
    case "First Interview": {
      return <CiMobile3 className={className} />;
    }

    case "Second Interview": {
      return <CiDesktop className={className} />;
    }

    case "Final Interview": {
      return <CiUser className={className} />;
    }

    case "Offered": {
      return <CiFaceSmile className={className} />;
    }

    default: {
      return null;
    }
  }
}

function KeyMetrics({ jobs }) {
  return (
    <div className="col-span-2 grid grid-cols-4 gap-6">
      {metrics.map((item) => {
        const newJobs = jobs.filter((job) => job.status === item);
        const numOfJobs = newJobs.length;

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
