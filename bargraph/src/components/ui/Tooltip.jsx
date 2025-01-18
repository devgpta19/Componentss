// import React from "react";

// const CustomTooltip = ({ active, payload }) => {
//   if (active && payload && payload.length) {
//     const { x, y } = payload[0].payload;
//     return (
//       <div className="p-2 bg-white border rounded shadow-md text-sm">
//         <p>Date: {new Date(x).toLocaleString()}</p>
//         <p>Net PnL: {y.toFixed(2)}</p>
//       </div>
//     );
//   }
//   return null;
// };

// export default CustomTooltip;


import React from "react";

export function ChartTooltip({ cursor, content }) {
  return (
    <>{React.cloneElement(content, { cursor })}</>
  );
}

export function ChartTooltipContent({ active, payload, indicator }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white border rounded shadow-md">
        <p className="text-sm font-medium">{payload[0].payload.month}</p>
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            className="flex items-center gap-2 text-sm"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></div>
            <span className="font-medium">{entry.name}:</span>
            <span>{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
