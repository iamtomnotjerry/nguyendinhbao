import React from 'react';

export default function Three66Days() {
  // Create an array with 366 elements representing the days in a year
  const daysInYear = Array.from({ length: 366 }, (_, index) => index + 1);

  // Get the current date and the total number of days in the year
  const currentDate = new Date();
  const totalDaysInYear = 366;

  // Calculate the current progress as a percentage
  const currentDayOfYear = currentDate.getDate(); // Get the current day of the year
  const progressPercentage = ((currentDayOfYear / totalDaysInYear) * 100).toFixed(2); // Calculate the percentage and round to 2 decimal places

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">366 Days in 2024</h1>
      <p className="mb-2">Current progress: {progressPercentage}%</p>
      <div className="grid grid-cols-12 gap-1">
        {daysInYear.map((day) => {
          // Calculate the date for the current day in the loop
          const date = new Date(currentDate.getFullYear(), 0); // January 0th is the start of the year
          date.setDate(day); // Set the day of the year

          // Check if the date has passed
          const isPastDate = date < currentDate;

          // Apply different styles based on whether the date has passed
          const dayStyles = `flex items-center justify-center h-6 border border-gray-300 rounded-md text-xs font-bold ${
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
