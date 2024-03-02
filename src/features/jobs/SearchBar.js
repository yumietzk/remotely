import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Button from "../../components/elements/Button";

function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(term.trim());

    setTerm("");
    inputRef.current.blur();
  }

  return (
    <form
      className="w-96 flex items-center mr-2"
      aria-label="search"
      onSubmit={handleSubmit}
    >
      <Button classes="relative left-0 rounded-full" type="submit">
        <CiSearch className="text-current w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full" />
      </Button>

      <input
        className="flex-1 -ml-7 w-full border-none bg-white rounded-3xl text-sm lg:text-base pl-12 pr-7 py-1 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-accent"
        ref={inputRef}
        type="text"
        placeholder="try frontend, backend, fullstack, etc."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
