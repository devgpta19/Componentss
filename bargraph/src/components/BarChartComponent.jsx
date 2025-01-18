import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { TrendingUp } from "lucide-react";

const netDailyPnL = [
    { x: "2025-01-01T10:30:00.000Z", y: 49.43422499999997 },
    { x: "2025-01-02T12:00:00.000Z", y: 68.98531500000013 },
    { x: "2025-01-02T15:30:00.000Z", y: -120.34874000000002 },
    { x: "2025-02-03T12:30:00.000Z", y: 592.9324500000002 },
    { x: "2025-03-05T15:20:00.000Z", y: 1381.9323000000004 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { x, y } = payload[0].payload;
        return (
            <div className="p-2 bg-white border rounded shadow-md text-sm">
                <p>Date: {new Date(x).toLocaleString()}</p>
                <p>Net PnL: {y.toFixed(2)}</p>
            </div>
        );
    }
    return null;
};

export default function BarChartComponent() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded">
            <div className="mb-4">
                <h2 className="text-lg font-bold text-center">Net Daily PnL - Bar Chart</h2>
                <p className="text-sm text-gray-500 text-center">January - March 2025</p>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={netDailyPnL}>
                    <CartesianGrid stroke="#e2e8f0" vertical={false} />
                    <XAxis
                        dataKey="x"
                        tickFormatter={(value) => new Date(value).toLocaleDateString()}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="y">
                        <LabelList position="top" dataKey="x" fill="black" />
                        {netDailyPnL.map((item, index) => (
                            <Cell
                                key={index}
                                fill={item.y > 0 ? "green" : "red"}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center gap-2 mt-4 text-sm">
                <div className="flex items-center gap-2 font-medium">
                    Trending up by 5.2% <TrendingUp className="h-4 w-4" />
                </div>
                <p className="text-gray-500">Showing Net Daily PnL for January - March 2025</p>
            </div>
        </div>
    );
}
