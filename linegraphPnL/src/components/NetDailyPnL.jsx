import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

const netDailyPnL = [
  { x: "2025-01-01T10:30:00.000Z", y: 49.43422499999997 },
  { x: "2025-01-02T12:00:00.000Z", y: 68.98531500000013 },
  { x: "2025-01-02T15:30:00.000Z", y: -120.34874000000002 },
  { x: "2025-02-03T12:30:00.000Z", y: 592.9324500000002 },
  { x: "2025-03-05T15:20:00.000Z", y: 1381.9323000000004 },
];

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const { x, y } = payload[0].payload;
    return (
      <div className="p-2 bg-white/20 border rounded shadow-md text-a1a1aa text-sm">
        <p className="font-medium">Date: {new Date(x).toLocaleString()}</p>
        <p className="font-medium">PnL: {y.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}

function NetDailyPnL() {
  return (
    <div className="p-4 bg-black shadow-md rounded-md text-white">
      <header className="mb-4">
        <h2 className="text-lg font-bold">Net Daily PnL</h2>
        <p className="text-sm text-white">Track performance over time</p>
      </header>
      <div className="w-full h-80 text-white">
        <LineChart className="text-white"
          data={netDailyPnL}
          width={700}
          height={300}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid stroke="#5A5A5A" vertical={false} />
          <XAxis
            dataKey="x"
            tickFormatter={(value) => new Date(value).toLocaleDateString()}
            tickLine={false}
            axisLine={false}
          />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#ab20fd"
            strokeWidth={2}
            dot={{ r: 4, stroke: "#d99bfd", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </div>
      {/* <footer className="flex-col items-start gap-2 mt-4 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% <TrendingUp className="h-4 w-4" />
        </div>
        <p className="text-gray-500 leading-none">
          Showing performance data from January to March 2025
        </p>
      </footer> */}
    </div>
  );
}

export default NetDailyPnL;
