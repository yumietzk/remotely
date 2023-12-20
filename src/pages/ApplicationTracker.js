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
  return (
    <div className="flex-1 grid grid-cols-kanban-board gap-x-10 overflow-x-scroll">
      {trackingStatus.map((status) => (
        <TrackerTable key={status} status={status} />
      ))}
    </div>
  );
}

export default ApplicationTracker;
