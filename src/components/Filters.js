import { useState } from "react";
import Selection from "./Selection";

const jobType = [
  "Full time",
  "Part time",
  "Contract",
  "Internship",
  "Freelance",
];

const skill = ["React", "JavaScript", "iOS", "Android", "AWS"];

function Filters() {
  const [selected, setSelected] = useState([]); //{jobPost, skill},

  function handleSelected(label) {
    setSelected((selected) =>
      selected.includes(label)
        ? selected.filter((item) => item !== label)
        : [...selected, label]
    );
  }

  return (
    // w-72
    <div className="border-r border-white-secondary space-y-7">
      <h3 className="text-2xl font-semibold">Filters</h3>

      <Selection
        title="Job type"
        labelData={jobType}
        handleSelected={handleSelected}
      />
      <Selection
        title="Skill"
        labelData={skill}
        handleSelected={handleSelected}
      />
    </div>
  );
}

export default Filters;
