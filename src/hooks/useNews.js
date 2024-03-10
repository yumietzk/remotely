import { useQuery } from "@tanstack/react-query";

async function fetchNews() {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=technology&language=en`
  );

  return res.json();
}

export function useNews() {
  const { isPending, isError, fetchStatus, data, error } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 180000, // 3 minutes
  });

  return { isPending, isError, fetchStatus, data, error };
}
