import { useNavigate } from "react-router-dom";

import { supabase } from "../services/supabase";
import ApplicationChart from "../features/dashboard/ApplicationChart";
import SavedJobs from "../features/dashboard/SavedJobs";
import { useUser } from "../contexts/UserProvider";
import { useEffect, useState } from "react";
import KeyMetrics from "../features/dashboard/KeyMetrics";

function Dashboard() {
  // 💡 Can extract as a hook
  const [trackingJobs, setTrackingJobs] = useState([]);

  const navigate = useNavigate();

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

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("You couldn't log out!");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="flex-1 grid grid-rows-[min-content_1fr] grid-cols-2 gap-6">
      {/* 💡 calling stage 1 or 2 might be also good */}
      <KeyMetrics trackingJobs={trackingJobs} />

      <ApplicationChart trackingJobs={trackingJobs} />
      <SavedJobs trackingJobs={trackingJobs} />
    </div>
  );
}

export default Dashboard;
