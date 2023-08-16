import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Form from "./components/Form";
import JobList from "./components/JobList";
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
    <div className="h-screen w-full grid grid-rows-[auto_auto_1fr] font-primary">
      <Header />
      <Form />
      <div className="px-12 py-9 flex bg-background-primary">
        <Filters />
        <JobList jobs={filteredJobsList} />
      </div>
    </div>
  );
}

export default App;
