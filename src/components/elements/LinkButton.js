function LinkButton({ classes, url, children }) {
  return (
    <a className={classes} href={url} target="_blank" rel="noreferrer">
      <button>{children}</button>
    </a>
  );
}

export default LinkButton;
