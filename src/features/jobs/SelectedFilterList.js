import SelectedFilter from "./SelectedFilter";

function SelectedFilterList({ filterList, handleDeleteSelected }) {
  return (
    <div className="self-end flex space-x-1">
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
