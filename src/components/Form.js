import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Form() {
  const [term, setTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="w-8/12 mx-auto flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <button className="relative left-0">
        <CiSearch className="text-black w-6 h-6 bg-background-primary" />
      </button>
      <input
        className="w-10/12 border-none bg-background-primary -ml-9 rounded-3xl pl-12 pr-7 text-black"
        type="text"
        placeholder="try frontend, backend, fullstack, etc."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}

export default Form;
