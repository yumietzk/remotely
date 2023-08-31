import SubHeader from "../components/SubHeader";
import SearchInput from "../components/SearchInput";
import Main from "../components/Main";

function SearchJobs({ handleSearch, jobs, searchTerm, handleResetSearch }) {
  return (
    <>
      <SubHeader>
        <SearchInput handleSearch={handleSearch} />
      </SubHeader>

      <Main
        jobs={jobs}
        searchTerm={searchTerm}
        handleResetSearch={handleResetSearch}
      />
    </>
  );
}

export default SearchJobs;
