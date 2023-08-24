import { useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    handleSearch(searchTerm);

    setSearchTerm("");
    inputRef.current.blur();
  }

  return (
    <form
      className="w-8/12 mx-auto flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <button className="relative left-0" type="submit">
        <CiSearch className="text-black w-6 h-6 bg-background-primary" />
      </button>
      <input
        className="w-10/12 border-none bg-background-primary -ml-9 rounded-3xl pl-12 pr-7 text-black"
        ref={inputRef}
        type="text"
        placeholder="try frontend, backend, fullstack, etc."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
