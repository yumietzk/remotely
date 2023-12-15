import { useState } from "react";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

function SubHeader({
  setSearchTerm,
  filterList,
  handleSelectedJobType,
  handleSelectedSkill,
}) {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="mb-12">
      <p className="text-lg mb-1">Search by positions.</p>

      <div className="flex">
        <SearchBar onSearch={setSearchTerm} />
        <FilterButton openFilter={openFilter} setOpenFilter={setOpenFilter} />
      </div>

      {openFilter && (
        <FilterBar
          filterList={filterList}
          handleSelectedJobType={handleSelectedJobType}
          handleSelectedSkill={handleSelectedSkill}
        />
      )}
    </div>
  );
}

export default SubHeader;
