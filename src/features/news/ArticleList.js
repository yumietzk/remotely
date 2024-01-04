import ArticleCard from "./ArticleCard";
import { placeholderImg } from "../../data/placeholderImg";

function ArticleList({ news }) {
  return (
    <div className="grid grid-cols-3 gap-x-14 gap-y-20">
      {news.map((item, i) => (
        <ArticleCard
          key={item.title}
          news={item}
          tempImage={placeholderImg[i]}
        />
      ))}
    </div>
  );
}

export default ArticleList;
