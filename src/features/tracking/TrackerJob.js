import ApplicationCard from "./ApplicationCard";
import Archived from "./Archived";

function TrackerJob({ data, archivedJobs, removeJob, updateJob }) {
  // Check if already categorized as archived, which means it's kept in the tracker
  const showArchived = data.archived;

  let isArchived = false;
  if (!showArchived) {
    isArchived = archivedJobs.some((item) => item.job_id === data.job_id);
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
