import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";

function useProfile() {
  const [profile, setProfile] = useState();

  const {
    user: {
      user: { id },
    },
  } = useUser();

  useEffect(() => {
    async function getProfile() {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select()
          .eq("id", id);

        if (error) {
          throw error;
        }

        setProfile(data[0]);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }

    getProfile();
  }, []);

  return { profile };
}

export default useProfile;
