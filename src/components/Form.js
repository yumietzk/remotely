import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Form() {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="w-9/12 flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <button>
        <CiSearch />
      </button>
      <input
        type="text"
        placeholder="try frontend, backend, fullstack, etc."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}

export default Form;
