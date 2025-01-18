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
