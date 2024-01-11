import { useEffect, useState } from "react";
import SavedJobRow from "./SavedJobRow";
import { useUser } from "../../contexts/UserProvider";
import { supabase } from "../../services/supabase";

function SavedJobList() {
  const [savedJobs, setSavedJobs] = useState([]);

  const noStatusJobs = savedJobs.filter((job) => job.status === "No Status");

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

        setSavedJobs(data);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }

    getTrackingJobs();
  }, []);

  return (
    <ul className="px-9 py-7 space-y-12">
      {noStatusJobs.map((item) => (
        <SavedJobRow key={item.id} job={item} />
      ))}
    </ul>
  );
}

export default SavedJobList;
