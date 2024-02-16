import SavedJobRow from "./SavedJobRow";

function SavedJobList({ jobs }) {
  const noStatusJobs = jobs.filter((job) => job.status === "No Status");

  if (noStatusJobs.length === 0) {
    return (
      <p className="px-9 py-7 text-gray-200">
        Let's find a job that you're interested in!
      </p>
    );
  }

  return (
    <ul className="px-9 py-7 space-y-12">
      {noStatusJobs.map((item) => (
        <SavedJobRow key={item.id} job={item} />
      ))}
    </ul>
  );
}

export default SavedJobList;
