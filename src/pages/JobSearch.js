import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SubHeader from "../features/jobs/SubHeader";
import JobTable from "../features/jobs/JobTable";
import {
  deleteItem,
  manageSelectedFilter,
} from "../utils/manageSelectedFilter";
import { createJobList } from "../utils/createJobList";

// 💡 In the below case, extract jobs available in Japan
// const availableJobsList = data.jobs.filter(
//   (job) =>
//     job.candidate_required_location === "Worldwide" ||
//     job.candidate_required_location.includes("Asia") ||
//     job.candidate_required_location.includes("Easter Asia") ||
//     job.candidate_required_location.includes("Japan")
// );

function JobSearch() {
  async function fetchJobs() {
    const res = await fetch(
      // ⚠️ Will figure out how many we fetch later!!!
      "https://remotive.com/api/remote-jobs?category=software-dev"
    );

    return res.json();
  }

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    gcTime: 43200000, // 12 hours
    staleTime: 21600000, // 6 hours
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const filterList = [...selectedJobType, ...selectedSkill];
  const newJobs = createJobList(
    data.jobs,
    selectedJobType,
    selectedSkill,
    searchTerm
  );

  function handleSelectedJobType(label) {
    const newSelected = manageSelectedFilter(selectedJobType, label);

    setSelectedJobType(newSelected);
  }

  function handleSelectedSkill(label) {
    const newSelected = manageSelectedFilter(selectedSkill, label);

    setSelectedSkill(newSelected);
  }

  function handleDeleteSelected(item) {
    if (selectedJobType.includes(item)) {
      const newSelected = deleteItem(selectedJobType, item);

      setSelectedJobType(newSelected);
    }

    if (selectedSkill.includes(item)) {
      const newSelected = deleteItem(selectedSkill, item);

      setSelectedSkill(newSelected);
    }
  }

  return (
    <div className="flex-1">
      <SubHeader
        setSearchTerm={setSearchTerm}
        filterList={filterList}
        handleSelectedJobType={handleSelectedJobType}
        handleSelectedSkill={handleSelectedSkill}
      />

      <JobTable
        isLoading={isPending}
        isError={isError}
        error={error}
        jobs={newJobs}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
      />
    </div>
  );
}

export default JobSearch;
