import { useQuery } from "@tanstack/react-query";

async function fetchJobs() {
  const res = await fetch(
    "https://remotive.com/api/remote-jobs?category=software-dev"
  );

  return res.json();
}

export function useJobs() {
  const { isPending, isError, fetchStatus, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    // It's recommended that you do not hit the API too often.
    gcTime: 43200000, // 12 hours
    staleTime: 21600000, // 6 hours
  });

  return { isPending, isError, fetchStatus, data, error };
}
