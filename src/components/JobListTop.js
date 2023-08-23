import { BiSortAlt2 } from "react-icons/bi";

function JobListTop({ numOfJobs }) {
  return (
    <div className="mb-10 flex items-center">
      <h2 className="text-4xl font-bold mr-5">All jobs</h2>
      <span className="px-3.5 py-1 rounded-3xl border border-white-secondary text-2xl font-bold">
        {numOfJobs}
      </span>
      <p className="self-end ml-auto font-medium flex items-center">
        <span className="text-white-secondary">Sort by:&nbsp;</span>Last updated
        <button className="ml-3.5 text-xl flex items-center">
          <BiSortAlt2 />
        </button>
      </p>
    </div>
  );
}

export default JobListTop;
