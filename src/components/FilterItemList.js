import FilterItem from "./FilterItem";

function FilterItemList({ filterList, onDeleteSelected }) {
  return (
    <div className="self-end flex space-x-1">
      {filterList.map((filter) => (
        <FilterItem
          key={filter}
          item={filter}
          onDeleteSelected={onDeleteSelected}
        />
      ))}
    </div>
  );
}

export default FilterItemList;
