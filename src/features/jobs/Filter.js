import { useEffect, useState } from "react";
import Checkbox from "../../components/elements/Checkbox";

function Filter({ label, filterList, callback }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(filterList.includes(label) ? true : false);
  }, [filterList, label]);

  function handleCheck(e) {
    setIsChecked((isChecked) => !isChecked);

    callback(e.target.value);
  }

  return (
    <Checkbox label={label} isChecked={isChecked} handleCheck={handleCheck} />
  );
}

export default Filter;
