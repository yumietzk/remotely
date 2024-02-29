import LinkButton from "../../components/elements/LinkButton";
import { formatDate } from "../../utils/formatDate";
import { truncateString } from "../../utils/truncateString";

function ArticleCard({ news, tempImage }) {
  const { title, description, image_url, link, creator, pubDate } = news;

  function handleImageError(e) {
    e.target.src = tempImage;
  }

  return (
    <div className="p-2 flex flex-col justify-between">
      <div>
        <img
          className="rounded-3xl mb-10 h-40 md:h-64 lg:h-48 xl:h-[225px] w-full object-cover"
          src={image_url || tempImage}
          alt={title}
          onError={handleImageError}
        />

        <div className="text-xs lg:text-sm font-light mb-5 flex justify-between">
          <span>{formatDate(pubDate)}</span>
          <span>
            {creator ? (creator[0] === "admin-dominor" ? "" : creator[0]) : ""}
          </span>
        </div>

        <h3 className="font-semibold text-base lg:text-lg mb-5">{title}</h3>

        <p
          className="font-light text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: truncateString(description || title),
          }}
        ></p>
      </div>

      <div className="mt-7 lg:mt-11 flex justify-end">
        <LinkButton
          classes="bg-gray-100 px-3.5 py-2 text-white rounded text-xs lg:text-sm text-right hover:bg-gray-200 active:ring-offset-green-100 active:ring-accent"
          url={link}
        >
          Read Article
        </LinkButton>
      </div>
    </div>
  );
}

export default ArticleCard;
