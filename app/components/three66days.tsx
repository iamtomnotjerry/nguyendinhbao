import React from 'react';

export default function Three66Days() {
  // Create an array with 366 elements representing the days in a year
  const daysInYear: number[] = Array.from({ length: 366 }, (_, index) => index + 1);

  // Get the current date and the total number of days in the year
  const currentDate: Date = new Date();
  const totalDaysInYear: number = 366;

  // Calculate the current progress as a percentage
  const startOfYear: Date = new Date(currentDate.getFullYear(), 0, 0);
  const diff: number = currentDate.getTime() - startOfYear.getTime();
  const oneDay: number = 1000 * 60 * 60 * 24;
  const currentDayOfYear: number = Math.floor(diff / oneDay);
  const progressPercentage: string = ((currentDayOfYear / totalDaysInYear) * 100).toFixed(2); // Calculate the percentage and round to 2 decimal places

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">366 Days in 2024</h1>
      <p className="mb-2">Current progress: {progressPercentage}%</p>
      <div className="grid grid-cols-12 gap-1">
        {daysInYear.map((day: number) => {
          // Calculate the date for the current day in the loop
          const date: Date = new Date(currentDate.getFullYear(), 0); // January 0th is the start of the year
          date.setDate(day); // Set the day of the year

          // Check if the date has passed
          const isPastDate: boolean = date < currentDate;

          // Apply different styles based on whether the date has passed
          const dayStyles: string = `flex items-center justify-center h-6 border border-gray-300 rounded-md text-xs font-bold ${
            isPastDate ? 'bg-blue-200' : '' // Apply blue background for past dates
          }`;

          return (
            <div key={day} className={dayStyles}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
