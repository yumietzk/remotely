// import { useTrackingJobs } from "../hooks/useTrackingJobs";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";
import TrackerTable from "../features/tracking/TrackerTable";

let trackingStatus = [
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

      getTrackingJobs();
      alert("Status updated");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  async function removeJob(id) {
    try {
      const { error } = await supabase.from("trackings").delete().eq("id", id);

      if (error) {
        throw error;
      }

      getTrackingJobs();
      alert("Remove a job");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    // これ追加したけど、縦方向に伸びなくなったので直す
    <div className="flex-1 px-11">
      <div className="bg-white border border-green-100 p-4 rounded-xl grid grid-cols-kanban-board gap-x-6 overflow-x-scroll">
        {trackingStatus.map((status, i) => {
          const jobs = trackingJobs.filter((job) => job.status === status);

          return (
            <TrackerTable
              key={status}
              status={status}
              jobs={jobs}
              index={i}
              updateJob={updateJob}
              removeJob={removeJob}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ApplicationTracker;
