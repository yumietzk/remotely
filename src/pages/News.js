import { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";

const newsData = require("../testNewsData.json");

// https://newsdata.io/api/1/news?apikey=pub_28974941b1185099ec9745db0046ff1f4270e&category=technology&language=en
// https://newsdata.io/api/1/archive?apikey=pub_28974941b1185099ec9745db0046ff1f4270e&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25

function News() {
  const [news, setNews] = useState(newsData.news);
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=technology&language=en`
  //     );
  //     const data = await res.json();
  //     console.log(data.results);
  //   };

  //   getData();
  // }, []);

  return (
    <div className="px-12 py-9 bg-background-primary row-span-2 h-max">
      <h1 className="text-4xl font-bold mb-3 text-center">
        The latest tech news
      </h1>
      <p className="text-lg text-center mb-16">
        Learn how to grow your business with our expert advice.
      </p>

      <ArticleList news={news} />
    </div>
  );
}

export default News;