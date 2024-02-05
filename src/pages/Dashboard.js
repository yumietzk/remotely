import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";
import KeyMetrics from "../features/dashboard/KeyMetrics";
import ApplicationChart from "../features/dashboard/ApplicationChart";
import SavedJobs from "../features/dashboard/SavedJobs";

function Dashboard() {
  // 💡 Can extract as a hook
  const [trackingJobs, setTrackingJobs] = useState([]);

  const {
    user: {
      user: { id: userId },
    },
  } = useUser();

  useEffect(() => {
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

    getTrackingJobs();
  }, []);

  return (
    <div className="flex-1 grid grid-rows-[min-content_1fr] grid-cols-2 gap-6">
      <KeyMetrics trackingJobs={trackingJobs} />

      <ApplicationChart trackingJobs={trackingJobs} />
      <SavedJobs trackingJobs={trackingJobs} />
    </div>
  );
}

export default Dashboard;
