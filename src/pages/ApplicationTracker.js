import { useJobs } from "../hooks/useJobs";
import { useTrackingJobs } from "../hooks/useTrackingJobs";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
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
  const { isPending, isError, fetchStatus, data: allJobs, error } = useJobs();
  const { isLoading, trackingJobs, updateJob, removeJob } = useTrackingJobs();

  // If the component is first mounted and the user has no network connection, the network error message will be rendered.
  if (isPending && fetchStatus === "paused") {
    return <Error message="Please check the internet connection ☹️" />;
  }

  if (isPending || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const archivedJobs = trackingJobs.filter(
    (item) => !allJobs.jobs.some((job) => job.id === item.job_id)
  );

  return (
    <div className="flex-1 mx-5 lg:mx-11 bg-white border border-green-100 px-3 py-3.5 lg:p-4 rounded-xl grid grid-cols-kanban-board lg:grid-cols-kanban-board-lg gap-x-2 lg:gap-x-6 overflow-x-scroll overflow-y-hidden">
      {trackingStatus.map((status, i) => {
        const jobs = trackingJobs.filter((job) => job.status === status);

        return (
          <TrackerTable
            key={status}
            status={status}
            jobs={jobs}
            archivedJobs={archivedJobs}
            index={i}
            updateJob={updateJob}
            removeJob={removeJob}
          />
        );
      })}
    </div>
  );
}

export default ApplicationTracker;
