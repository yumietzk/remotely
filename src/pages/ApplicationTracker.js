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
    <div className="flex-1 grid grid-cols-kanban-board gap-x-10 overflow-x-scroll">
      {trackingStatus.map((status) => {
        const jobs = trackingJobs.filter((job) => job.status === status);

        return <TrackerTable key={status} status={status} jobs={jobs} />;
      })}
    </div>
  );
}

export default ApplicationTracker;
