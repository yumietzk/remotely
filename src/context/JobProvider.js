import { createContext, useContext, useEffect, useState } from "react";
import { formatString } from "../utils/formatString";

const JobContext = createContext();

function JobProvider({ children }) {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const [jobs, setJobs] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error } = status;

  useEffect(() => {
    const getJobs = async () => {
      try {
        setStatus({ ...status, isLoading: true, error: "" });

        const res = await fetch(
          // ⚠️ Will figure out how many we fetch
          "https://remotive.com/api/remote-jobs?limit=30"
        );
        const data = await res.json();
        // console.log(data);

        setJobs(data);
      } catch (err) {
        console.error(err);
        setStatus({ ...status, error: err.message });
      } finally {
        setStatus({ ...status, isLoading: false });
      }
    };

    getJobs();
  }, []);

  function handleSearch(term) {
    setSearchTerm(term.trim());

    const formattedSearchTerm = formatString(term);
    const newJobList = jobs.filter(
      (job) =>
        formatString(job.title).includes(formattedSearchTerm) ||
        job.tags.some((item) => {
          return formatString(item).includes(formattedSearchTerm);
        })
    );

    setJobs(newJobList);
    // 🤨compare with descriptionは難しそう
  }

  function handleResetSearch() {
    setSearchTerm("");
    // setJobs(filteredJobsList);
    // ⚠️ ↑↑の代わりにMainでselectedを両方デフォルト値にできるかも
  }

  return (
    <JobContext.Provider
      value={{
        isLoading,
        jobs,
        searchTerm,
        onSearch: handleSearch,
        onResetSearch: handleResetSearch,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

function useJob() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("JobContext is used outside the JobProvider");
  }

  return context;
}

export { JobProvider, useJob };
