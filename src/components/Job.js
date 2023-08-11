function Job({ job }) {
  return (
    <li style={{ display: "flex" }}>
      <p>{job.company_name}</p>
      <p>{job.title}</p>
    </li>
  );
}

export default Job;
