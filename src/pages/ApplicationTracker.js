import { toast } from "react-toastify";
import { useJobs } from "../hooks/useJobs";
import { useTrackingJobs } from "../hooks/useTrackingJobs";
import { supabase } from "../services/supabase";
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
  const { trackingJobs, getTrackingJobs } = useTrackingJobs();

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

  async function updateJob(id, status, archived = "false") {
    try {
      const { error } = await supabase
        .from("trackings")
        .update({ status, archived })
        .eq("id", id);

      if (error) {
        throw error;
      }

      getTrackingJobs();

      if (!archived) {
        toast.success("Updated the status");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function removeJob(id) {
    try {
      const { error } = await supabase.from("trackings").delete().eq("id", id);

      if (error) {
        throw error;
      }

      getTrackingJobs();
      toast.success("Removed an application");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  const archivedJobs = trackingJobs.filter(
    (item) => !allJobs.jobs.some((job) => job.id === item.id)
  );

  return (
    <div className="flex-1 mx-11 bg-white border border-green-100 p-4 rounded-xl grid grid-cols-kanban-board gap-x-6 overflow-x-scroll overflow-y-hidden">
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
