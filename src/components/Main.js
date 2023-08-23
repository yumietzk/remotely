import { useState } from "react";
import Filters from "./Filters";
import Selection from "./Selection";
import JobList from "./JobList";
const data = require("../testData.json");

const jobType = [
  "Full time",
  "Part time",
  "Contract",
  "Internship",
  "Freelance",
];

const skill = ["React", "JavaScript", "iOS", "Android", "AWS"];

const filteredJobsList = data.jobs.filter(
  (job) =>
    job.candidate_required_location === "Worldwide" ||
    job.candidate_required_location.includes("Asia") ||
    job.candidate_required_location.includes("Easter Asia") ||
    job.candidate_required_location.includes("Japan")
);

function formatString(string) {
  if (string.includes("_")) {
    return string
      .split("_")
      .map((item) => item.toLowerCase())
      .join("");
  } else if (string.includes(" ")) {
    return string
      .split(" ")
      .map((item) => item.toLowerCase())
      .join("");
  } else {
    return string;
  }
}

function createNewSelected(selected, label) {
  let formattedLabel;
  if (label.includes(" ")) {
    formattedLabel = label
      .split(" ")
      .map((string) => string.toLowerCase())
      .join("");
  } else {
    formattedLabel = label.toLowerCase();
  }

  return selected.includes(formattedLabel)
    ? selected.filter((item) => item !== formattedLabel)
    : [...selected, formattedLabel];
}

function Main() {
  const [allJobs, setAllJobs] = useState(filteredJobsList); // all software development jobs
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);

  // useEffect(() => {
  //   fetch("https://remotive.com/api/remote-jobs")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const filteredJobs = allJobs.filter(
    (job) => selectedJobType.includes(formatString(job.job_type)) // ここに&&で続けてskillsのフイルター入れる
  );

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
      <JobList jobs={filteredJobsList} />
    </main>
  );
}

export default Main;
