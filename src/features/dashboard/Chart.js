import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "No Status",
    value: 7,
  },
  {
    name: "Applied",
    value: 4,
  },
  {
    name: "First Interview",
    value: 2,
  },
  {
    name: "Second Interview",
    value: 1,
  },
  {
    name: "Final Interview",
    value: 0,
  },
  {
    name: "Offered",
    value: 0,
  },
];

function Chart() {
  return (
    <div className="px-9 py-7 flex justify-center items-center">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#0baf56"
          label
        />
      </PieChart>
    </div>
  );
}

export default Chart;
