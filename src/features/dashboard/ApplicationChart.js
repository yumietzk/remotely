import Chart from "./Chart";

function ApplicationChart({ jobs }) {
  const applied = jobs.filter((job) => job.status === "Applied");
  const firstIntervew = jobs.filter((job) => job.status === "First Interview");
  const secondIntervew = jobs.filter(
    (job) => job.status === "Second Interview"
  );
  const finalIntervew = jobs.filter((job) => job.status === "Final Interview");
  const offered = jobs.filter((job) => job.status === "Offered");

  // Extract the jobs that are applied and moved to the interview stage
  const appliedJobs = jobs.filter((job) => job.status !== "No Status");
  const movedInterview = appliedJobs.filter((job) => job.status !== "Applied");

  const data = [
    {
      name: "Applied",
      value: applied.length,
    },
    {
      name: "First Interview",
      value: firstIntervew.length,
    },
    {
      name: "Second Interview",
      value: secondIntervew.length,
    },
    {
      name: "Final Interview",
      value: finalIntervew.length,
    },
    {
      name: "Offered",
      value: offered.length,
    },
  ];

  // Filter out categories with zero values
  const filteredData = data.filter((item) => item.value !== 0);

  return (
    <div className="h-fit bg-white rounded-xl">
      <h3 className="lg:text-lg font-medium px-5 py-3 lg:px-7 lg:py-5 border-b border-green-100">
        Application Chart
      </h3>

      <div>
        {filteredData.length === 0 ? (
          <p className="px-9 py-14 text-gray-200">
            You haven't applied any jobs yet.
          </p>
        ) : (
          <>
            <Chart data={filteredData} />

            <div className="px-9 pb-7">
              {data[4].value !== 0 && (
                <p>
                  You've got {data[4].value}{" "}
                  {data[4].value === 1 ? "offer!" : "offers!"}
                </p>
              )}

              {movedInterview.length === 0 ? (
                <p>
                  You've applied {data[0].value}{" "}
                  {data[0].value === 1 ? "job" : "jobs"} so far.
                </p>
              ) : (
                <p>
                  You moved to the interview stage{" "}
                  {Math.trunc(
                    (movedInterview.length / appliedJobs.length) * 100
                  )}
                  % ({movedInterview.length} out of {appliedJobs.length}{" "}
                  {appliedJobs.length > 1 ? "applications" : "application"})!
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplicationChart;
