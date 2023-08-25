import FilterItem from "./FilterItem";

function FilterItemList({ filterList, handleDeleteSelected }) {
  return (
    <div className="self-end flex space-x-1">
      {filterList.map((filter) => (
        <FilterItem
          key={filter}
          item={filter}
          handleDeleteSelected={handleDeleteSelected}
        />
      ))}
    </div>
  );
}

export default FilterItemList;
