import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../contexts/UserProvider";
import { supabase } from "../services/supabase";

export function useTrackingJobs() {
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
      toast.error(error.message);
    }
  }

  return { trackingJobs, getTrackingJobs };
}
