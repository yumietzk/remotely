import { useJobs } from "../hooks/useJobs";
import { useTrackingJobs } from "../hooks/useTrackingJobs";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
import KeyMetrics from "../features/dashboard/KeyMetrics";
import ApplicationChart from "../features/dashboard/ApplicationChart";
import SavedJobs from "../features/dashboard/SavedJobs";

function Dashboard() {
  const { isPending, isError, fetchStatus, data: allJobs, error } = useJobs();
  const { isLoading, trackingJobs } = useTrackingJobs();

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

  // Check if the job is not archived yet
  const newData = trackingJobs.filter((item) =>
    allJobs.jobs.some((job) => job.id === item.job_id)
  );

  return (
    <div className="flex-1 px-5 lg:px-11 overflow-y-scroll">
      <h2 className="font-semibold text-xl lg:text-[26px] mt-6 lg:mt-8">
        Dashboard
      </h2>

      <div className="pt-12 grid grid-rows-[min-content_min-content_min-content] lg:grid-rows-[min-content_800px] lg:grid-cols-2 gap-y-8 gap-x-4 lg:gap-y-12 lg:gap-x-9">
        <KeyMetrics jobs={newData} />

        <ApplicationChart jobs={newData} />
        <SavedJobs jobs={newData} />
      </div>
    </div>
  );
}

export default Dashboard;
