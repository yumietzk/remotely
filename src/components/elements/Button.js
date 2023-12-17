function Button({
  children,
  classes,
  type = "button",
  callback,
  disabled = false,
}) {
  return (
    <button
      className={`${classes} transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
      type={type}
      onClick={callback}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
