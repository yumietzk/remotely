import { useJobs } from "../hooks/useJobs";
import { useTrackingJobs } from "../hooks/useTrackingJobs";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
import KeyMetrics from "../features/dashboard/KeyMetrics";
import ApplicationChart from "../features/dashboard/ApplicationChart";
import SavedJobs from "../features/dashboard/SavedJobs";

function Dashboard() {
  const { isPending, isError, fetchStatus, data: allJobs, error } = useJobs();
  const { trackingJobs } = useTrackingJobs();

  // If the component is first mounted and the user has no network connection, the network error message will be rendered.
  if (isPending && fetchStatus === "paused") {
    return <Error message="Please check the internet connection ☹️" />;
  }

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  // Check if the job is not archived yet
  const newData = trackingJobs.filter((item) =>
    allJobs.jobs.some((job) => job.id === item.id)
  );

  return (
    <div className="flex-1 px-11 grid grid-rows-[min-content_1fr] grid-cols-2 gap-6">
      <KeyMetrics jobs={newData} />

      <ApplicationChart jobs={newData} />
      <SavedJobs jobs={newData} />
    </div>
  );
}

export default Dashboard;
