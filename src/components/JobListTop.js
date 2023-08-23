import Sort from "./Sort";

function JobListTop({ numOfJobs }) {
  return (
    <div className="mb-10 flex items-center">
      <h2 className="text-4xl font-bold mr-5">All jobs</h2>
      <span className="px-3.5 py-1 rounded-3xl border border-white-secondary text-2xl font-bold">
        {numOfJobs}
      </span>

      {/* <Sort /> */}
    </div>
  );
}

export default JobListTop;
