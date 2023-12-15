function Button({ children, classes, callback, disabled = false }) {
  return (
    <button
      className={`${classes} transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-green-300`}
      onClick={callback}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
