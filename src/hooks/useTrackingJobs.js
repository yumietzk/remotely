import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../contexts/UserProvider";
import { supabase } from "../services/supabase";

export function useTrackingJobs() {
  const [trackingJobs, setTrackingJobs] = useState([]);

  const {
    user: { id },
  } = useUser();

  const getTrackingJobs = useCallback(async () => {
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
      toast.error(error.message);
    }
  }, [id]);

  useEffect(() => {
    getTrackingJobs();
  }, [getTrackingJobs]);

  return { trackingJobs, getTrackingJobs };
}
