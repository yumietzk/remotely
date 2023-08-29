import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Main from "./components/Main";
import SearchInput from "./components/SearchInput";
import formatString from "./utils/formatString";
import ErrorPage from "./components/ErrorPage";
import SearchJobs from "./routes/SearchJobs";
import JobboardLayout from "./components/JobboardLayout";
import Homepage from "./components/Homepage";

const data = require("./testData.json");

const filteredJobsList = data.jobs.filter(
  (job) =>
    job.candidate_required_location === "Worldwide" ||
    job.candidate_required_location.includes("Asia") ||
    job.candidate_required_location.includes("Easter Asia") ||
    job.candidate_required_location.includes("Japan")
);

function App() {
  const [jobs, setJobs] = useState(filteredJobsList); // all software development jobs
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   fetch("https://remotive.com/api/remote-jobs")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

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
    setJobs(filteredJobsList);
  }

  // return (
  //   // grid-cols-[300px_1fr]
  //   <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
  //     <Header />
  // <SubHeader>
  //   <SearchInput handleSearch={handleSearch} />
  // </SubHeader>
  // <Main
  //   jobs={jobs}
  //   searchTerm={searchTerm}
  //   handleResetSearch={handleResetSearch}
  // />
  //   </div>
  // );

  return (
    // <AppLayout>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route
            element={
              <JobboardLayout
                jobs={jobs}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                handleResetSearch={handleResetSearch}
              />
            }
          >
            <Route path="search" element={<SearchJobs />} />
          </Route>
          {/* <Route path="/" element={<JobboardLayout />}>
            <Route index element={<SearchJobs />} />
            <Route path="recommended" element={<SearchJobs />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    // </AppLayout>
  );
}

export default App;
