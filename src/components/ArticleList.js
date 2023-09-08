// Placeholder image
// https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60
// https://plus.unsplash.com/premium_photo-1661898424988-a5f6d40d3db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1609705024873-7add858e3036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60
// https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60

const tempImage =
  "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";

function ArticleList({ news }) {
  const { title, description, image_url, link, creator, pubDate } = news;

  return (
    <div className="border border-rose-600">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        Link
      </a>
      <span>{creator[0]}</span>
      <span>{pubDate}</span>
      <img src={image_url || tempImage} alt={title} />
    </div>
  );
}

export default ArticleList;
