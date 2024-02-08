import { formatString } from "./formatString";

export function searchJobs(jobs, searchTerm) {
  const formattedSearchTerm = formatString(searchTerm);

  return jobs.filter((job) =>
    formatString(job.title).includes(formattedSearchTerm)
  );
}
