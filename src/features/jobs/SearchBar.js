import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import TextInput from "../../components/form/TextInput";
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
    <form className="w-96 flex items-center mr-2" onSubmit={handleSubmit}>
      <TextInput
        labelClasses="flex-1 -ml-7"
        inputClasses="w-full border-none bg-white rounded-3xl pl-12 pr-7 py-1"
        inputRef={inputRef}
        type="text"
        placeholder="try frontend, backend, fullstack, etc."
        value={term}
        handleChange={(e) => setTerm(e.target.value)}
      >
        <Button classes="relative left-0 rounded-full" type="submit">
          <CiSearch className="text-current w-5 h-5 bg-white rounded-full" />
        </Button>
        {/* <button className="relative left-0" type="submit"></button> */}
      </TextInput>
    </form>
  );
}

export default SearchBar;
