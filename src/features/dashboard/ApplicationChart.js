import Chart from "./Chart";

function ApplicationChart({ trackingJobs }) {
  console.log(trackingJobs);

  const applied = trackingJobs.filter((job) => job.status === "Applied");
  const firstIntervew = trackingJobs.filter(
    (job) => job.status === "First Interview"
  );
  const secondIntervew = trackingJobs.filter(
    (job) => job.status === "Second Interview"
  );
  const finalIntervew = trackingJobs.filter(
    (job) => job.status === "Final Interview"
  );
  const offered = trackingJobs.filter((job) => job.status === "Offered");

  const movedInterview = trackingJobs.filter((job) => job.status !== "Applied");

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
      <h3 className="font-medium px-7 py-5 border-b border-green-100">
        Application Chart
      </h3>

      <div>
        {filteredData.length === 0 ? (
          <p>You haven't applied any jobs yet.</p>
        ) : (
          <>
            <Chart data={filteredData} />

            <div className="px-9 pb-7">
              <p>
                You've got {data[4].value}{" "}
                {data[4].value === 0
                  ? "offer."
                  : data[4].value === 1
                  ? "offer!"
                  : "offers!"}
              </p>
              <p>
                You move to the interview stage{" "}
                {Math.trunc(
                  (movedInterview.length / trackingJobs.length) * 100
                )}
                % ({movedInterview.length} out of {trackingJobs.length})!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ApplicationChart;
