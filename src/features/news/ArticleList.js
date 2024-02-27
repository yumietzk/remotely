import ArticleCard from "./ArticleCard";
import { placeholderImg } from "../../data/placeholderImg";

function ArticleList({ news }) {
  // Remove the duplicated news
  let newData = [];
  let title = [];
  news.forEach((item) => {
    if (!title.includes(item.title)) {
      newData.push(item);
      title.push(item.title);
    }
  });

  return (
    <div className="grid grid-cols-3 gap-x-14 gap-y-20">
      {newData.map((item, i) => (
        <ArticleCard
          key={item.article_id}
          news={item}
          tempImage={placeholderImg[i]}
        />
      ))}
    </div>
  );
}

export default ArticleList;
