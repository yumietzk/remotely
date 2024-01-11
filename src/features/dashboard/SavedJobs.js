import SavedJobList from "./SavedJobList";

function SavedJobs() {
  return (
    <div className="h-fit bg-white rounded-xl">
      <h3 className="font-medium px-7 py-5 border-b border-green-100">
        Saved Jobs
      </h3>

      <SavedJobList />
    </div>
  );
}

export default SavedJobs;
