import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../data/WeeklyOverview";

export default function ChartBar() {
  return (
    <ResponsiveContainer width="99%" height="88%">
      <BarChart
        width={350}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="sales" fill="#9155fd" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}
