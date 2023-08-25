function FilterItem({ item, handleDeleteSelected }) {
  return (
    <div className="px-3 py-0.5 rounded-3xl border border-white-secondary flex items-center">
      <button
        className="flex justify-center items-center mr-2 font-semibold"
        onClick={() => handleDeleteSelected(item)}
      >
        x
      </button>
      <span>{item}</span>
    </div>
  );
}

export default FilterItem;
