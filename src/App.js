import { useEffect, useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import SubHeader from "./components/SubHeader";
import JobList from "./components/JobList";
const data = require("./testData.json");

function App() {
  const [jobs, setJobs] = useState(data.jobs); // all software development jobs

  // useEffect(() => {
  //   fetch("https://remotive.com/api/remote-jobs")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const filteredJobsList = jobs.filter(
    (job) =>
      job.candidate_required_location === "Worldwide" ||
      job.candidate_required_location.includes("Asia") ||
      job.candidate_required_location.includes("Easter Asia") ||
      job.candidate_required_location.includes("Japan")
  );

  return (
    // grid-cols-[300px_1fr]
    <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary font-normal text-base text-black">
      <Header />
      <SubHeader />
      <div className="pl-12 pr-9 py-9 bg-background-primary grid grid-cols-[260px_1fr_auto_1fr]">
        <Filters />
        {/* ⚠️ 横幅広げた時に今の状態だと不自然な空間ができる時がある */}
        <JobList jobs={filteredJobsList} />
      </div>
    </div>
  );
}

export default App;
