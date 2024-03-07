function Button({
  children,
  classes,
  type = "button",
  label,
  handleClick,
  disabled = false,
}) {
  return (
    <button
      className={`${classes} transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
        disabled && "cursor-not-allowed"
      }`}
      type={type}
      aria-label={label}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
