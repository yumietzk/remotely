function LinkButton({ classes, url, children }) {
  return (
    <a
      className={`${classes} flex justify-center items-center transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 active:outline-none active:ring-2 active:ring-offset-2 `}
      href={url}
      target="_blank"
      aria-label="Read more about details"
      rel="noreferrer"
    >
      <span>{children}</span>
    </a>
  );
}

export default LinkButton;
