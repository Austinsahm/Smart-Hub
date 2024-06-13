"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

type attendanceProps = {
  type: string;
  actualNumber: number;
  totalNumber: number;
};

export function AttendanceProgress({
  type,
  actualNumber,
  totalNumber,
}: attendanceProps) {
  const [progress, setProgress] = React.useState(0);

  //   // State to manage the attendance data
  //   const [data, setData] = React.useState({
  //     type: "Attendance",
  //     actualNumber: 0,
  //     totalNumber: 0,
  //   });

  //   // Function to fetch data from the backend (simulated here with a timeout)
  //   const fetchData = async () => {
  //     // Simulate fetching data with a delay
  //     setTimeout(() => {
  //       const newData = {
  //         type: "Teacher Attendance",
  //         actualNumber: 6,
  //         totalNumber: 14,
  //       };
  //       setData(newData);
  //     }, 2000); // Fetching data after 2 seconds (simulate backend response)
  //   };

  //   React.useEffect(() => {
  //     fetchData(); // Initial data fetch

  //     // You can add more logic to fetch data periodically or based on specific triggers
  //   }, []);

  // Calculate percentage whenever data changes
  const percentage = ((actualNumber / totalNumber) * 100).toFixed(2);

  React.useEffect(() => {
    setProgress(parseFloat(percentage)); // Update the progress bar based on the percentage
  }, [percentage]);

  return (
    <>
      <div className="mb-2">
        <div className="font-bold">
          {actualNumber} of {totalNumber}
        </div>
        <div className="text-sm">{type}</div>
        <div className="flex items-center space-x-2 w-full">
          <Progress value={progress} className="w-[95%]" />
          <div className="font-bold">{percentage}%</div>
        </div>
      </div>
    </>
  );
}
