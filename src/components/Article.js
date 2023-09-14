import { formatDate } from "../utils/formatDate";
import { truncateString } from "../utils/truncateString";

function Article({ news, tempImage, btnColor }) {
  console.log(news);
  const { title, description, image_url, link, creator, pubDate } = news;

  return (
    <div className="p-2 flex flex-col justify-between">
      <div>
        <img
          className="rounded-3xl mb-10 h-[225px] w-full"
          src={image_url || tempImage}
          alt={title}
        />

        <div className="text-sm font-light mb-5 flex justify-between">
          {/* ⭐️ pubdateの順に並び替えする？ */}
          <span className="">{formatDate(pubDate)}</span>
          <span className="">
            {creator ? (creator[0] === "admin-dominor" ? "" : creator[0]) : ""}
          </span>
        </div>

        <h3 className="font-semibold text-lg mb-5">{title}</h3>

        <p className="font-light">{truncateString(description)}</p>
      </div>

      <div className="mt-11 flex justify-end">
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
