import { jobType, skill } from "../../data/filterOptions";
import FilterList from "./FilterList";

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
