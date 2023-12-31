function Button({
  children,
  classes,
  type = "button",
  handleClick,
  disabled = false,
}) {
  return (
    <button
      className={`${classes} transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
