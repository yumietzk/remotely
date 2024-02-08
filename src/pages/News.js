import { useQuery } from "@tanstack/react-query";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
import ArticleList from "../features/news/ArticleList";

function News() {
  async function fetchNews() {
    const res = await fetch(
      `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=technology&language=en`
    );

    return res.json();
  }

  const { isPending, isError, fetchStatus, data, error } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 180000, // 3 minutes
  });

  // If the component is first mounted and the user has no network connection, the network error message will be rendered.
  if (isPending && fetchStatus === "paused") {
    return <Error message="Please check the internet connection ☹️" />;
  }

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <div className="flex-1 w-full px-11">
      <h1 className="text-4xl font-bold mb-3 text-center">
        The latest tech news
      </h1>
      <p className="text-lg text-center mb-14">
        Stay informed about industry trends and recent technological
        advancements.
      </p>

      <ArticleList news={data.results} />
    </div>
  );
}

export default News;
