import CheckBox from "./CheckBox";

function Filters() {
  return (
    // w-72
    <div className="border-r border-white-secondary space-y-7">
      <h3 className="text-2xl font-semibold">Filters</h3>

      <div>
        <h4 className="text-white-secondary font-medium mb-3.5">Job type</h4>
        <div className="flex flex-col font-medium space-y-3">
          <CheckBox label="Full time" />
          <CheckBox label="Part time" />
          <CheckBox label="Contract" />
          <CheckBox label="Internship" />
          <CheckBox label="Freelance" />
        </div>
      </div>

      <div>
        <h4 className="text-white-secondary font-medium mb-3.5">Skill</h4>
        <div className="flex flex-col font-medium space-y-3">
          <CheckBox label="React" />
          <CheckBox label="JavaScript" />
          <CheckBox label="iOS" />
          <CheckBox label="Android" />
          <CheckBox label="AWS" />
        </div>
      </div>
    </div>
  );
}

export default Filters;
