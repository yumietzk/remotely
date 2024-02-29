import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const colors = ["#8f7cc7", "#6ccfbf", "#b08667", "#b079af", "#99cd5a"];

function Chart({ data }) {
  // Calculate the minimum of width and height
  const minSize = Math.min(250, 250);

  return (
    <div className="pt-5 lg:pt-7 flex justify-center items-center mb-6 lg:mb-14">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={minSize / 2} // Set outerRadius dynamically
          fill="#8f7cc7"
          label
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="top" height={100} />
      </PieChart>
    </div>
  );
}

export default Chart;
