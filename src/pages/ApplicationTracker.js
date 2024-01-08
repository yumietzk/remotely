import { useTrackingJobs } from "../hooks/useTrackingJobs";
import TrackerTable from "../features/tracking/TrackerTable";

const trackingStatus = [
  "No Status",
  "Applied",
  "First Interview",
  "Second Interview",
  "Final Interview",
  "Offered",
];

function ApplicationTracker() {
  const { trackingJobs } = useTrackingJobs();

  return (
    <div className="flex-1 bg-white border border-green-100 p-4 rounded-xl">
      <div className="h-full grid grid-cols-kanban-board gap-x-6 overflow-x-scroll">
        {trackingStatus.map((status, i) => {
          const jobs = trackingJobs.filter((job) => job.status === status);

          return (
            <TrackerTable key={status} status={status} jobs={jobs} index={i} />
          );
        })}
      </div>
    </div>
  );
}

export default ApplicationTracker;
