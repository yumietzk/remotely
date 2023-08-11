import { useState } from "react";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import JobsList from "./components/JobsList";
const data = require("./testData.json");

function App() {
  const [jobs, setJobs] = useState(data.jobs); // all software development jobs

  const filteredJobsList = jobs.filter(
    (job) =>
      job.candidate_required_location === "Worldwide" ||
      job.candidate_required_location.includes("Asia") ||
      job.candidate_required_location.includes("Easter Asia") ||
      job.candidate_required_location.includes("Japan")
  );

  return (
    // grid-cols-[300px_1fr]
    <div className="grid grid-rows-[auto_auto_1fr]">
      <Navigation />
      <Form />
      <div className="px-12 py-9 flex">
        <SideBar />
        <JobsList jobs={filteredJobsList} />
      </div>
    </div>
  );
}

export default App;
