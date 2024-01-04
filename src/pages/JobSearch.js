import { useEffect, useState } from "react";
import SubHeader from "../features/jobs/SubHeader";
import JobTable from "../features/jobs/JobTable";
import {
  deleteItem,
  manageSelectedFilter,
} from "../utils/manageSelectedFilter";
import { createJobList } from "../utils/createJobList";

const data = require("../data/testData.json");

function JobSearch() {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  const { isLoading, error } = status;

  const filterList = [...selectedJobType, ...selectedSkill];
  const newJobs = createJobList(
    jobs,
    selectedJobType,
    selectedSkill,
    searchTerm
  );

  useEffect(() => {
    console.log("Read job data");

    setStatus((status) => ({ ...status, isLoading: true, error: "" }));
    // ⚠️ 本来は、まずここで全部のjobを引っ張ってきた後に、このavailable listを計算する感じ。
    // 💡 In the below case, extract jobs available in Japan
    // const availableJobsList = data.jobs.filter(
    //   (job) =>
    //     job.candidate_required_location === "Worldwide" ||
    //     job.candidate_required_location.includes("Asia") ||
    //     job.candidate_required_location.includes("Easter Asia") ||
    //     job.candidate_required_location.includes("Japan")
    // );
    setJobs(data.jobs);

    setStatus((status) => ({ ...status, isLoading: false }));

    // async function fetchJobs() {
    //   try {
    //     setStatus((status) => ({ ...status, isLoading: true, error: "" }));

    //     const res = await fetch(
    //       // ⚠️ Will figure out how many we fetch later!!!
    //       "https://remotive.com/api/remote-jobs?category=software-dev"
    //     );
    //     const data = await res.json();
    //     // console.log(data);

    //     // ⚠️ This depends on where the uesr is based on
    //     // const availableJobsList = data.jobs.filter(
    //     //   (job) => job.candidate_required_location === "Worldwide"
    //     //   // job.candidate_required_location.includes("Asia") ||
    //     //   // job.candidate_required_location.includes("Easter Asia") ||
    //     //   // job.candidate_required_location.includes("Japan")
    //     // );

    //     setJobs(data.jobs);
    //   } catch (err) {
    //     console.error(err);
    //     setStatus((status) => ({ ...status, error: err.message }));
    //   } finally {
    //     setStatus((status) => ({ ...status, isLoading: false }));
    //   }
    // }

    // fetchJobs();
  }, []);

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
        isLoading={isLoading}
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
