import { filterJobs } from "./filterJobs";
import { searchJobs } from "./searchJobs";

export function createJobList(
  jobs,
  selectedJobType,
  selectedSkill,
  searchTerm
) {
  let newJobList = jobs;

  if (selectedJobType.length > 0 || selectedSkill.length > 0) {
    newJobList = filterJobs(newJobList, selectedJobType, selectedSkill);
  }

  if (searchTerm) {
    newJobList = searchJobs(newJobList, searchTerm);
  }

  return newJobList;
}
