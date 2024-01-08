import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  // const [profile, setProfile] = useState({});

  const {
    user: {
      user: { id },
    },
  } = useUser();

  async function getProfile() {
    // console.log("useQuery getProfile");

    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", id);

    if (error) {
      throw error;
    }

    return data[0];
  }

  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
    gcTime: 43200000, // 12 hours
    staleTime: 21600000, // 6 hours
  });

  // useEffect(() => {
  //   async function getProfile() {
  //     try {
  //       const { data, error } = await supabase
  //         .from("profiles")
  //         .select()
  //         .eq("id", id);

  //       if (error) {
  //         throw error;
  //       }

  //       setProfile(data[0]);
  //     } catch (error) {
  //       console.error(error);
  //       alert(error.message);
  //     }
  //   }

  //   getProfile();
  // }, []);

  // return { profile };
}
