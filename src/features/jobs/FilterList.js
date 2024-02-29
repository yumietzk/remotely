import Filter from "./Filter";

function FilterList({ title, labelData, filterList, onSelected }) {
  return (
    <div>
      <h4 className="inline-block bg-gray-200 py-1 px-2.5 text-xs lg:text-sm rounded-full text-white mb-1.5">
        {title}
      </h4>
      <div className="flex text-xs lg:text-sm space-x-4 ml-1">
        {labelData.map((label) => (
          <Filter
            key={label}
            label={label}
            filterList={filterList}
            callback={onSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default FilterList;
