function LinkButton({ classes, url, children }) {
  return (
    <a
      className={`${classes} transition duration-300 active:outline-none active:ring-2 active:ring-offset-2 `}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <button>{children}</button>
    </a>
  );
}

export default LinkButton;
