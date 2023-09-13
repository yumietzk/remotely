import { formatDate } from "../utils/formatDate";

function Article({ news, tempImage, btnColor }) {
  console.log(news);
  const { title, description, image_url, link, creator, pubDate } = news;

  return (
    <div className="p-2">
      <img
        className="rounded-3xl mb-10"
        src={image_url || tempImage}
        alt={title}
      />
      <div className="text-sm font-light mb-5 flex justify-between">
        {/* ⭐️ pubdateの順に並び替えする？ */}
        <span className="">{formatDate(pubDate)}</span>
        {/* ⚠️ creator考えるnullとか */}
        {/* <span className="">{creator[0]}</span> */}
      </div>
      <h3 className="font-semibold text-lg mb-5">{title}</h3>
      {/* ⚠️ description truncateする, trim */}
      <p className="font-light mb-7">{description}</p>
      <div className="flex justify-end">
        <a
          className={`bg-white-secondary px-3.5 py-2 text-white-primary rounded text-sm text-right hover:${btnColor} hover:text-black`}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <button>Read Article</button>
        </a>
      </div>
    </div>
  );
}

export default Article;
