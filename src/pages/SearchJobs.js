import { useEffect, useState } from "react";
import SubHeader from "../components/SubHeader";
import SearchInput from "../components/SearchInput";
import Main from "../components/Main";
import { formatString } from "../utils/formatString";

const data = require("../testData.json");

function SearchJobs() {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error } = status;

  const formattedSearchTerm = formatString(searchTerm);
  // 🤨compare with descriptionは難しそう
  const searchedJobs = searchTerm
    ? jobs.filter(
        (job) =>
          formatString(job.title).includes(formattedSearchTerm) ||
          job.tags.some((item) => {
            return formatString(item).includes(formattedSearchTerm);
          })
      )
    : jobs;

  useEffect(() => {
    setStatus((status) => ({ ...status, isLoading: true, error: "" }));
    // ⚠️ 本来は、まずここで全部のjobを引っ張ってきた後に、このavailable listを計算する感じ。
    const availableJobsList = data.jobs.filter(
      (job) =>
        job.candidate_required_location === "Worldwide" ||
        job.candidate_required_location.includes("Asia") ||
        job.candidate_required_location.includes("Easter Asia") ||
        job.candidate_required_location.includes("Japan")
    );
    setJobs(availableJobsList);

    setStatus((status) => ({ ...status, isLoading: false }));
    // const getJobs = async () => {
    //   try {
    //     setStatus((status) => ({ ...status, isLoading: true, error: "" }));

    //     const res = await fetch(
    //       // ⚠️ Will figure out how many we fetch later!!!
    //       "https://remotive.com/api/remote-jobs?limit=30"
    //     );
    //     const data = await res.json();
    //     // console.log(data);

    //     setJobs(data);
    //   } catch (err) {
    //     console.error(err);
    //     setStatus((status) => ({ ...status, error: err.message }));
    //   } finally {
    //     setStatus((status) => ({ ...status, isLoading: false }));
    //   }
    // };

    // getJobs();
  }, []);

  function handleSearch(term) {
    setSearchTerm(term.trim());
  }

  function handleResetSearch() {
    setSearchTerm("");
  }

  return (
    <>
      <SubHeader>
        <SearchInput onSearch={handleSearch} />
      </SubHeader>

      <Main
        isLoading={isLoading}
        jobs={searchedJobs}
        searchTerm={searchTerm}
        onResetSearch={handleResetSearch}
      />
    </>
  );
}

export default SearchJobs;
