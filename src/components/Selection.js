import Checkbox from "./Checkbox";

function Selection({ title, labelData, filterList, onSelected }) {
  return (
    <div>
      <h4 className="inline-block bg-gray-200 py-1 px-2.5 text-sm rounded-full text-white mb-1.5">
        {title}
      </h4>
      <div className="flex text-sm space-x-4">
        {labelData.map((label) => (
          <Checkbox
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

export default Selection;
