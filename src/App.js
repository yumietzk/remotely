// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import SearchJobs from "./pages/SearchJobs";
import Homepage from "./components/Homepage";

// const data = require("./testData.json");

// const filteredJobsList = data.jobs.filter(
//   (job) =>
//     job.candidate_required_location === "Worldwide" ||
//     job.candidate_required_location.includes("Asia") ||
//     job.candidate_required_location.includes("Easter Asia") ||
//     job.candidate_required_location.includes("Japan")
// );

function App() {
  // const [status, setStatus] = useState({ isLoading: false, error: "" });
  // const [jobs, setJobs] = useState(filteredJobsList); // all software development jobs
  // const [searchTerm, setSearchTerm] = useState("");

  // const { isLoading, error } = status;

  // useEffect(() => {
  //   const getJobs = async () => {
  //     try {
  //       setStatus({ ...status, isLoading: true, error: "" });

  //       const res = await fetch(
  //         "https://remotive.com/api/remote-jobs?limit=30"
  //       );
  //       const data = await res.json();
  //       // console.log(data);

  //       setJobs(data);
  //     } catch (err) {
  //       console.error(err);
  //       setStatus({ ...status, error: err.message });
  //     } finally {
  //       setStatus({ ...status, isLoading: false });
  //     }
  //   };

  //   getJobs();
  // }, []);

  // function handleSearch(term) {
  //   setSearchTerm(term.trim());

  //   const formattedSearchTerm = formatString(term);
  //   const newJobList = jobs.filter(
  //     (job) =>
  //       formatString(job.title).includes(formattedSearchTerm) ||
  //       job.tags.some((item) => {
  //         return formatString(item).includes(formattedSearchTerm);
  //       })
  //   );

  //   setJobs(newJobList);
  //   // 🤨compare with descriptionは難しそう
  // }

  // function handleResetSearch() {
  //   setSearchTerm("");
  //   setJobs(filteredJobsList);
  // }

  // return (
  //   // grid-cols-[300px_1fr]
  //   <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
  //     <Header />
  //     <SubHeader>
  //       <SearchInput handleSearch={handleSearch} />
  //     </SubHeader>
  //     <Main
  //       jobs={jobs}
  //       searchTerm={searchTerm}
  //       handleResetSearch={handleResetSearch}
  //     />
  //   </div>
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route
            path="search"
            element={
              <SearchJobs
                isLoading={isLoading}
                jobs={jobs}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                handleResetSearch={handleResetSearch}
              />
            }
          />
          <Route path="blog" element={<p>Blog</p>} />
          <Route path="account" element={<p>User Account</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
