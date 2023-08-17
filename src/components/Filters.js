function Filters() {
  return (
    // w-72
    <div className="border-r border-white-secondary">
      Filters
      <div className="flex flex-col">
        <div>
          <input type="checkbox" />
          <label>Full time</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Part time</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Internship</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
