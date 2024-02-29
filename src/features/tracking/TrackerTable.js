import TrackerJobColumn from "./TrackerJobColumn";

function TrackerTable({
  status,
  jobs,
  archivedJobs,
  index,
  updateJob,
  removeJob,
}) {
  return (
    <div className="relative h-full flex flex-col py-2.5 overflow-y-hidden">
      <div className="h-7 flex items-center mb-3">
        <h3 className="text-sm lg:text-base font-medium mr-2">{status}</h3>
        <p className="bg-gray-200 w-6 h-6 lg:w-7 lg:h-7 rounded-full text-white flex items-center justify-center">
          {jobs.length}
        </p>
      </div>

      <TrackerJobColumn
        status={status}
        jobs={jobs}
        archivedJobs={archivedJobs}
        index={index}
        updateJob={updateJob}
        removeJob={removeJob}
      />
    </div>
  );
}

export default TrackerTable;
