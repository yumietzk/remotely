import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUser } from "../contexts/UserProvider";
import { supabase } from "../services/supabase";

export function useTrackingJobs() {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingJobs, setTrackingJobs] = useState([]);

  const {
    user: { id },
  } = useUser();

  const getTrackingJobs = useCallback(async () => {
    try {
      setIsLoading(true);

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
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getTrackingJobs();
  }, [getTrackingJobs]);

  return { isLoading, trackingJobs, getTrackingJobs };
}
