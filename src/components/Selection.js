import { useState } from "react";
import Checkbox from "./Checkbox";

function Selection({ title, labelData, handleSelected }) {
  // "job_type" -> full_time/contract/part_time/freelance/internship
  return (
    <div>
      <h4 className="text-white-secondary font-medium mb-3.5">{title}</h4>
      <div className="flex flex-col font-medium space-y-3">
        {labelData.map((label) => (
          <Checkbox key={label} label={label} callback={handleSelected} />
        ))}
      </div>
    </div>
  );
}

export default Selection;
