import SavedJobList from "./SavedJobList";

function SavedJobs({ jobs }) {
  return (
    <div className="max-h-full h-fit bg-white rounded-xl flex flex-col lg:overflow-y-hidden">
      <h3 className="h-[49px] lg:h-[69px] lg:text-lg font-medium px-5 py-3 lg:px-7 lg:py-5 border-b border-green-100">
        Saved Jobs
      </h3>

      <SavedJobList jobs={jobs} />
    </div>
  );
}

export default SavedJobs;
