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

  async function addJob(data) {
    try {
      const newData = {
        user_id: id,
        ...data,
      };

      const { error } = await supabase.from("trackings").insert(newData);

      if (error) {
        throw error;
      }

      getTrackingJobs();
      toast.success("Saved a job");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function updateJob(id, status, archived, type = "update") {
    try {
      const { error } = await supabase
        .from("trackings")
        .update({ status, archived })
        .eq("id", id);

      if (error) {
        throw error;
      }

      getTrackingJobs();

      if (type === "update") {
        toast.success("Updated the status");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function removeJob(id, type = "application") {
    try {
      const { error } = await supabase.from("trackings").delete().eq("id", id);

      if (error) {
        throw error;
      }

      getTrackingJobs();

      if (type === "application") {
        toast.success("Removed an application");
      } else {
        toast.success("Removed a job from the saved");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return {
    isLoading,
    trackingJobs,
    addJob,
    updateJob,
    removeJob,
  };
}
