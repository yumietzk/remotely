import Button from "../../components/elements/Button";

function SelectedFilter({ item, handleDeleteSelected }) {
  return (
    <div className="px-3 py-0.5 rounded-3xl border border-gray-100 flex items-center">
      <Button
        classes="flex justify-center items-center mr-2 font-semibold rounded-full"
        label="delete"
        handleClick={() => handleDeleteSelected(item)}
      >
        x
      </Button>
      <span className="text-sm lg:text-base">{item}</span>
    </div>
  );
}

export default SelectedFilter;
