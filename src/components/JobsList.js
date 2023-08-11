import Job from "./Job";

function JobsList({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobsList;
