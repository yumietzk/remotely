import { useEffect, useState } from "react";
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

function createNewSelected(selected, label) {
  const formattedLabel = label.replace(" ", "").toLowerCase();

  return selected.includes(formattedLabel)
    ? selected.filter((item) => item !== formattedLabel)
    : [...selected, formattedLabel];
}

function Main({ jobs }) {
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  const filteredJobs = jobs
    .filter((job) =>
      selectedJobType.length > 0
        ? selectedJobType.includes(formatString(job.job_type))
        : true
    )
    .filter((job) => {
      return selectedSkill.length > 0
        ? job.tags.some((item) => {
            return selectedSkill.includes(formatString(item));
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

  return (
    <main className="pl-12 pr-9 py-9 bg-background-primary grid grid-cols-[250px_1fr_auto_1fr]">
      <Filters>
        <Selection
          title="Job type"
          labelData={jobType}
          handleSelected={handleSelectedJobType}
        />
        <Selection
          title="Skill"
          labelData={skill}
          handleSelected={handleSelectedSkill}
        />
      </Filters>
      {/* ⚠️ 横幅広げた時に今の状態だと不自然な空間ができる時がある */}
      <JobList
        jobs={
          selectedJobType.length > 0 || selectedSkill.length > 0
            ? filteredJobs
            : jobs
        }
      />
    </main>
  );
}

export default Main;
