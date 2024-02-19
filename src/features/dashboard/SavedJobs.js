import SavedJobList from "./SavedJobList";

function SavedJobs({ jobs }) {
  return (
    <div className="max-h-full h-fit bg-white rounded-xl flex flex-col overflow-y-hidden">
      <h3 className="h-[69px] text-lg font-medium px-7 py-5 border-b border-green-100">
        Saved Jobs
      </h3>

      <SavedJobList jobs={jobs} />
    </div>
  );
}

export default SavedJobs;
