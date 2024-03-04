import { useState } from "react";
import { useJobs } from "../hooks/useJobs";
import {
  deleteItem,
  manageSelectedFilter,
} from "../utils/manageSelectedFilter";
import { createJobList } from "../utils/createJobList";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";
import SubHeader from "../features/jobs/SubHeader";
import JobTable from "../features/jobs/JobTable";

function JobSearch() {
  const { isPending, isError, fetchStatus, data, error } = useJobs();

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
    <div className="flex-1 px-5 lg:px-11 overflow-y-scroll overflow-x-hidden">
      <SubHeader
        setSearchTerm={setSearchTerm}
        filterList={filterList}
        handleSelectedJobType={handleSelectedJobType}
        handleSelectedSkill={handleSelectedSkill}
      />

      <JobTable
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
