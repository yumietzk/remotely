import { useEffect } from "react";

// https://newsdata.io/api/1/news?apikey=pub_28974941b1185099ec9745db0046ff1f4270e&category=technology&language=en
// https://newsdata.io/api/1/archive?apikey=pub_28974941b1185099ec9745db0046ff1f4270e&q=example&language=en&from_date=2023-01-19&to_date=2023-01-25

function News() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(
  //       `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&category=technology&language=en`
  //     );
  //     const data = await res.json();

  //     const { title, description } = data.results[1];
  //     console.log(title);
  //     console.log(description);
  //   };

  //   getData();
  // }, []);

  return <div className="px-12 py-9 bg-background-primary h-full">News</div>;
}

export default News;
