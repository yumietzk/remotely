import { formatDate } from "../utils/formatDate";

const tempImage =
  "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

function Article({ news }) {
  const { title, description, image_url, link, creator, pubDate } = news;

  return (
    <div className="p-2">
      <img
        className="rounded-3xl mb-10"
        src={image_url || tempImage}
        alt={title}
      />
      <div className="text-sm font-light mb-5 flex justify-between">
        <span className="">{formatDate(pubDate)}</span>
        <span className="">{creator[0]}</span>
      </div>
      <h3 className="font-semibold text-lg mb-5">{title}</h3>
      <p className="font-light mb-7">{description}</p>
      <div className="flex justify-end">
        <a
          className="bg-white-secondary px-3.5 py-2 text-white-primary rounded-3xl text-sm text-right"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <button>Continue Reading</button>
        </a>
      </div>
    </div>
  );
}

export default Article;
