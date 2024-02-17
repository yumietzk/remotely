import ApplicationCard from "./ApplicationCard";
import Archived from "./Archived";

function TrackerJob({ data, archivedJobs, removeJob, updateJob }) {
  // Check if already categorized as archived but still keep in the tracker
  const showArchived = data.archived;

  let isArchived = false;
  if (!showArchived) {
    isArchived = archivedJobs.some((item) => +String(item.id).slice(0, 7) === +String(data.id).slice(0, 7));
  }

  return !showArchived && isArchived ? (
    <Archived data={data} updateJob={updateJob} removeJob={removeJob} />
  ) : (
    <ApplicationCard
      data={data}
      updateJob={updateJob}
      removeJob={removeJob}
      showArchived={showArchived}
    />
  );
}

export default TrackerJob;
