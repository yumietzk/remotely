import { useNews } from "../hooks/useNews";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
import ArticleList from "../features/news/ArticleList";

function News() {
  const { isPending, isError, fetchStatus, data, error } = useNews();

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
    <div className="flex-1 w-full px-5 lg:px-11 overflow-y-scroll">
      <h1 className="text-2xl lg:text-3xl font-bold mb-2.5 lg:mb-3 text-center">
        The latest tech news
      </h1>
      <p className="text-base lg:text-lg text-center mb-10 lg:mb-14">
        Stay informed about industry trends and recent technological
        advancements.
      </p>

      <ArticleList news={data.results} />
    </div>
  );
}

export default News;
