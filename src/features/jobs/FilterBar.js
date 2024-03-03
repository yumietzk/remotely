import { filterOptions } from "../../data/filterOptions";
import FilterList from "./FilterList";

function FilterBar({ filterList, handleSelectedJobType, handleSelectedSkill }) {
  return (
    <div className="mt-4 space-y-3">
      {Object.entries(filterOptions).map(([type, options]) => (
        <FilterList
          key={type}
          title={type === "jobType" ? "Job type" : "Skill"}
          labelData={options}
          filterList={filterList}
          onSelected={
            type === "jobType" ? handleSelectedJobType : handleSelectedSkill
          }
        />
      ))}
    </div>
  );
}

export default FilterBar;
