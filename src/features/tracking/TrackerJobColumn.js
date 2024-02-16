import TrackerJob from "./TrackerJob";

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

function TrackerJobColumn({
  status,
  jobs,
  archivedJobs,
  index,
  updateJob,
  removeJob,
}) {
  // Sort job list:
  // If not already categorized as archived but still keep in the tracker although the job is already archived, make them first rendered so that the user notices them.
  // If categorized as archived but still keep in the tracker, make them rendered last.

  let sortedJobs = [];

  jobs.forEach(
    (item) =>
      archivedJobs.some((job) => job.id === item.id) &&
      !item.archived &&
      sortedJobs.push(item)
  );

  const remainder = jobs
    .filter((item) => !sortedJobs.some((job) => job.id === item.id))
    .sort((a, b) => Number(a.archived) - Number(b.archived));
  sortedJobs = [...sortedJobs, ...remainder];

  return (
    <div
      className={`flex-1 overflow-y-scroll flex flex-col space-y-2 ${
        status === "No Status" ? "bg-gray-50" : getCardBgColor(index)
      } p-1.5 rounded-xl`}
    >
      {sortedJobs.map((job) => (
        <TrackerJob
          key={job.id}
          data={job}
          archivedJobs={archivedJobs}
          updateJob={updateJob}
          removeJob={removeJob}
        />
      ))}
    </div>
  );
}

export default TrackerJobColumn;
