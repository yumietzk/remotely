import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";

export function useTrackingJobs() {
  const [trackingJobs, setTrackingJobs] = useState([]);

  const {
    user: {
      user: { id },
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
        .eq("user_id", id);

      if (error) {
        throw error;
      }

      setTrackingJobs(data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }

  return { trackingJobs, getTrackingJobs };
}
