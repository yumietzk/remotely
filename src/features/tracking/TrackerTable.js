import ApplicationCard from "./ApplicationCard";

function getCardBgColor(index) {
  const remainder = index % 5;

  switch (remainder) {
    case 0: {
      return "bg-[#e3dbfa]";
    }
    case 1: {
      return "bg-[#d4f6ed]";
    }
    case 2: {
      return "bg-[#ffe1cc]";
    }
    case 3: {
      return "bg-[#fbe2f4]";
    }
    case 4: {
      return "bg-[#f2ffcc]";
    }
    default: {
      return "bg-[#e3dbfa]";
    }
  }
}

function TrackerTable({ status, jobs, index, updateJob, removeJob }) {
  return (
    <div className="relative h-full flex flex-col py-2.5">
      <div className="flex items-center mb-3">
        <h3 className="font-medium mr-2">{status}</h3>
        <p className="bg-gray-200 w-7 h-7 rounded-full text-white flex items-center justify-center">
          {jobs.length}
        </p>
      </div>

      <div
        className={`flex-1 flex flex-col space-y-2 ${
          status === "No Status" ? "bg-gray-50" : getCardBgColor(index)
        } p-1.5 rounded-xl`}
      >
        {jobs.map((job) => (
          <ApplicationCard
            key={job.id}
            data={job}
            updateJob={updateJob}
            removeJob={removeJob}
          />
        ))}
      </div>
    </div>
  );
}

export default TrackerTable;
