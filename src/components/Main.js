import { useState } from "react";
import Filters from "./Filters";
import Selection from "./Selection";
import JobList from "./JobList";
// const data = require("../testData.json");
import formatString from "../utils/formatString";

const jobType = [
  "Full time",
  "Part time",
  "Contract",
  "Internship",
  "Freelance",
];

const skill = ["React", "JavaScript", "iOS", "Android", "AWS"];

function addItem(array, item) {
  return [...array, item];
}

function deleteItem(array, item) {
  return array.filter((cur) => cur !== item);
}

function createNewSelected(selected, label) {
  return selected.includes(label)
    ? deleteItem(selected, label)
    : addItem(selected, label);
}

function Main({ jobs, searchTerm, handleResetSearch }) {
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  const filterList = [...selectedJobType, ...selectedSkill];

  const formattedSelectedJobType = selectedJobType.map((item) =>
    formatString(item)
  );
  const formattedSelectedSkill = selectedSkill.map((item) =>
    formatString(item)
  );

  const filteredJobs = jobs
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

  function handleSelectedJobType(label) {
    const newSelected = createNewSelected(selectedJobType, label);

    setSelectedJobType(newSelected);
  }

  function handleSelectedSkill(label) {
    const newSelected = createNewSelected(selectedSkill, label);

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
    // ⚠️ jobtitletopに、searchtermが入る時、左にバツ印入れるから、1frと言っても最小のpxは決めておく
    <main className="pl-12 pr-9 py-9 bg-background-primary grid grid-cols-[250px_1fr_auto_1fr]">
      <Filters>
        <Selection
          title="Job type"
          labelData={jobType}
          filterList={filterList}
          handleSelected={handleSelectedJobType}
        />
        <Selection
          title="Skill"
          labelData={skill}
          filterList={filterList}
          handleSelected={handleSelectedSkill}
        />
      </Filters>
      {/* ⚠️ 横幅広げた時に今の状態だと不自然な空間ができる時がある */}
      <JobList
        filterList={filterList}
        handleDeleteSelected={handleDeleteSelected}
        jobs={
          selectedJobType.length > 0 || selectedSkill.length > 0
            ? filteredJobs
            : jobs
        }
        searchTerm={searchTerm}
        handleResetSearch={handleResetSearch}
      />
    </main>
  );
}

export default Main;
