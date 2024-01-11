import Chart from "./Chart";

function ApplicationChart() {
  return (
    <div className="h-fit bg-white rounded-xl">
      <h3 className="font-medium px-7 py-5 border-b border-green-100">
        Application Chart
      </h3>

      <Chart />

      <p>You moved to the interview stage xx%!!</p>
    </div>
  );
}

export default ApplicationChart;
