import FilterList from "./FilterList";
import { jobType, skill } from "../../data/filterOptions";

function FilterBar({ filterList, handleSelectedJobType, handleSelectedSkill }) {
  return (
    <div className="mt-4 space-y-3">
      <FilterList
        title="Job type"
        labelData={jobType}
        filterList={filterList}
        onSelected={handleSelectedJobType}
      />
      <FilterList
        title="Skill"
        labelData={skill}
        filterList={filterList}
        onSelected={handleSelectedSkill}
      />
    </div>
  );
}

export default FilterBar;
