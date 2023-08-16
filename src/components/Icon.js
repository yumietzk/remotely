function Icon({ divClass, children }) {
  return (
    <div className={divClass}>
      {children}
      {/* <CiUser className="text-white-primary font-normal w-8 h-8 p-1.5 border border-white-secondary rounded-full" /> */}
    </div>
  );
}

export default Icon;
