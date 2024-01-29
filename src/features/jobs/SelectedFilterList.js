import SelectedFilter from "./SelectedFilter";

function SelectedFilterList({ filterList, handleDeleteSelected }) {
  return (
    <div className="self-end flex gap-x-1 flex-wrap gap-y-1">
      {filterList.map((filter) => (
        <SelectedFilter
          key={filter}
          item={filter}
          handleDeleteSelected={handleDeleteSelected}
        />
      ))}
    </div>
  );
}

export default SelectedFilterList;
