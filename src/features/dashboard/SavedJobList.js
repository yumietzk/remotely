import SavedJobRow from "./SavedJobRow";

function SavedJobList({ trackingJobs }) {
  const noStatusJobs = trackingJobs.filter((job) => job.status === "No Status");

  return (
    <ul className="px-9 py-7 space-y-12">
      {noStatusJobs.map((item) => (
        <SavedJobRow key={item.id} job={item} />
      ))}
    </ul>
  );
}

export default SavedJobList;
