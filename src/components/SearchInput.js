import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput({ onSearch }) {
  const [term, setTerm] = useState("");

  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(term);

    setTerm("");
    inputRef.current.blur();
  }

  return (
    <form className="w-96 flex items-center mr-2" onSubmit={handleSubmit}>
      <button className="relative left-0" type="submit">
        <CiSearch className="text-current w-5 h-5 bg-white" />
      </button>
      {/* 💡 fix the ring outline later, and placeholder font size and color */}
      <input
        className="flex-1 border-none bg-white -ml-7 rounded-3xl pl-12 pr-7 py-1 text-current"
        ref={inputRef}
        type="text"
        placeholder="try frontend, backend, fullstack, etc."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
