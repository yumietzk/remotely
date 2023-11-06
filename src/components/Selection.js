import Checkbox from "./Checkbox";

function Selection({ title, labelData, filterList, onSelected }) {
  // space-y-3
  return (
    <div>
      <h4 className="bg-gray-200 font-medium mb-3.5">{title}</h4>
      <div className="flex font-medium space-x-3.5">
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
