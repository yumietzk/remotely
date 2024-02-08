import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  deleteItem,
  manageSelectedFilter,
} from "../utils/manageSelectedFilter";
import { createJobList } from "../utils/createJobList";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
import SubHeader from "../features/jobs/SubHeader";
import JobTable from "../features/jobs/JobTable";

async function fetchJobs() {
  const res = await fetch(
    "https://remotive.com/api/remote-jobs?category=software-dev"
  );

  return res.json();
}

function JobSearch() {
  const { isPending, isError, fetchStatus, data, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    // It's recommended that you do not hit the API too often.
    gcTime: 43200000, // 12 hours
    staleTime: 21600000, // 6 hours
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  // If the component is first mounted and the user has no network connection, the network error message will be rendered.
  if (isPending && fetchStatus === "paused") {
    return <Error message="Please check the internet connection ☹️" />;
  }

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={error.message} />;
  }

  const filterList = [...selectedJobType, ...selectedSkill];
  // Create new job list based on search term and filter list
  const newJobs = createJobList(
    data.jobs,
    selectedJobType,
    selectedSkill,
    searchTerm
  );

  // Manage which item is selected in the job type filter
  function handleSelectedJobType(label) {
    const newSelected = manageSelectedFilter(selectedJobType, label);

    setSelectedJobType(newSelected);
  }

  // Manage which item is selected in the skill filter
  function handleSelectedSkill(label) {
    const newSelected = manageSelectedFilter(selectedSkill, label);

    setSelectedSkill(newSelected);
  }

  // Delete an item from the selected items in both the job type and skill filter
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
    <div className="flex-1 px-11 overflow-y-scroll overflow-x-visible">
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
