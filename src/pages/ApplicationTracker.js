// import { useTrackingJobs } from "../hooks/useTrackingJobs";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";
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
  // const { trackingJobs } = useTrackingJobs();

  // 💡 custom hook後から
  const [trackingJobs, setTrackingJobs] = useState([]);

  const {
    user: {
      user: { id: userId },
    },
  } = useUser();

  useEffect(() => {
    getTrackingJobs();
  }, []);

  async function getTrackingJobs() {
    try {
      const { data, error } = await supabase
        .from("trackings")
        .select()
        .eq("user_id", userId);

      if (error) {
        throw error;
      }

      setTrackingJobs(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function updateJob(id, status) {
    try {
      const { error } = await supabase
        .from("trackings")
        .update({ status })
        .eq("id", id);

      if (error) {
        throw error;
      }

      alert("Status updated");
      getTrackingJobs();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div className="flex-1 bg-white border border-green-100 p-4 rounded-xl">
      <div className="h-full grid grid-cols-kanban-board gap-x-6 overflow-x-scroll">
        {trackingStatus.map((status, i) => {
          const jobs = trackingJobs.filter((job) => job.status === status);

          return (
            <TrackerTable
              key={status}
              status={status}
              jobs={jobs}
              index={i}
              updateJob={updateJob}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ApplicationTracker;
