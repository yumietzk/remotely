import { useEffect, useState } from "react";
import Filters from "./Filters";
import JobList from "./JobList";
const data = require("../testData.json");

function Main() {
  const [jobs, setJobs] = useState(data.jobs); // all software development jobs

  // useEffect(() => {
  //   fetch("https://remotive.com/api/remote-jobs")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const filteredJobsList = jobs.filter(
    (job) =>
      job.candidate_required_location === "Worldwide" ||
      job.candidate_required_location.includes("Asia") ||
      job.candidate_required_location.includes("Easter Asia") ||
      job.candidate_required_location.includes("Japan")
  );

  function handleFilterByJobType(selectedItem) {
    if (selectedItem.length === 0) return;
  }

  function handleFilterBySkill(selectedItem) {
    if (selectedItem.length === 0) return;
  }

  function handleFilterJobList(selectedItem) {
    handleFilterByJobType(selectedItem.jobType);
    handleFilterBySkill(selectedItem.skill);
  }

  return (
    <div className="pl-12 pr-9 py-9 bg-background-primary grid grid-cols-[250px_1fr_auto_1fr]">
      <Filters />
      {/* ⚠️ 横幅広げた時に今の状態だと不自然な空間ができる時がある */}
      <JobList jobs={filteredJobsList} />
    </div>
  );
}

export default Main;
