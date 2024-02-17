import Button from "../../components/elements/Button";

function Archived({ data, updateJob, removeJob }) {
  const { id, title, company_name, status } = data;

  return (
    <div className="bg-gray-200 text-white text-sm rounded-xl py-4 px-5 z-0">
      <p className="mb-4">
        {title} ({company_name}) is archived. Do you want to remove the
        application?
      </p>

      {/* If the job is archived, ask if the user wants to remove it */}
      <div className="flex justify-between items-center">
        <Button
          classes="bg-white text-black px-3.5 py-1.5 rounded-lg hover:bg-gray-100 focus:ring-offset-gray-200"
          handleClick={() => removeJob(id)}
        >
          Remove
        </Button>
        <Button
          classes="bg-white text-black px-3.5 py-1.5 rounded-lg hover:bg-accent focus:ring-offset-gray-200"
          handleClick={() => updateJob(id, status, true, "archive")}
        >
          Keep it
        </Button>
      </div>
    </div>
  );
}

export default Archived;
