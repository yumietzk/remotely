function Filters({ children }) {
  return (
    // w-72
    <div className="border-r border-white space-y-7">
      <h3 className="text-2xl font-semibold">Filters</h3>

      {children}
    </div>
  );
}

export default Filters;
