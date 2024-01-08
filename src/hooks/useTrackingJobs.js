import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useUser } from "../contexts/UserProvider";

// ⚠️ hooksにすることによってuseTrackingJobsが呼ばれるたびに、この中にdefineされているそれぞれのfunctionも呼ばれる？
// ここでreducer使える？
// export function useTrackingJobs(id, status) {
//   const [trackingJobs, setTrackingJobs] = useState([]);
//   // console.log(trackingJobs);

//   const {
//     user: {
//       user: { id: userId },
//     },
//   } = useUser();

//   useEffect(() => {
//     getTrackingJobs();
//   }, []);

//   async function getTrackingJobs() {
//     try {
//       const { data, error } = await supabase
//         .from("trackings")
//         .select()
//         .eq("user_id", userId);

//       if (error) {
//         throw error;
//       }

//       setTrackingJobs(data);
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   }

//   async function updateJob(id, status) {
//     try {
//       const { error } = await supabase
//         .from("trackings")
//         .update({ status })
//         .eq("id", id);

//       if (error) {
//         throw error;
//       }

//       alert("Status updated");
//       getTrackingJobs();
//     } catch (error) {
//       console.error(error);
//       alert(error.message);
//     }
//   }

//   return { trackingJobs, getTrackingJobs, updateJob };
// }
