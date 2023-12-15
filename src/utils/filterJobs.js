import { formatString } from "./formatString";

export function filterJobs(jobs, selectedJobType, selectedSkill) {
  const formattedSelectedJobType = selectedJobType.map((item) =>
    formatString(item)
  );
  const formattedSelectedSkill = selectedSkill.map((item) =>
    formatString(item)
  );

  return jobs
    .filter((job) =>
      selectedJobType.length > 0
        ? formattedSelectedJobType.includes(formatString(job.job_type))
        : true
    )
    .filter((job) => {
      return selectedSkill.length > 0
        ? job.tags.some((item) => {
            return formattedSelectedSkill.includes(formatString(item));
          })
        : true;
    });
}
