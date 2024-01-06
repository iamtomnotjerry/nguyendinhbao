import React from 'react';

export default function DailyPlan() {
  return (
    <div className="bg-gray-100  flex justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Daily Plan</h1>
        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-bold">5AM:</span> Get Up
          </p>
          <p>
            <span className="font-bold">5AM - 5:15AM:</span> Skincare
          </p>
          <p>
            <span className="font-bold">5AM - 5:45AM:</span> Yoga
          </p>
          <p>
            <span className="font-bold">5AM - 6AM:</span> Read your goals
          </p>
          <p>
            <span className="font-bold">6AM - 7:30AM:</span> Breakfast
          </p>
          <p>
            <span className="font-bold">7:30AM - 11:00AM:</span> ...
          </p>
          <p>
            <span className="font-bold">11AM - 12PM:</span> Have Lunch
          </p>
          <p>
            <span className="font-bold">12AM - 5PM:</span> ...
          </p>
          <p>
            <span className="font-bold">5PM - 7PM:</span> Dinner
          </p>
          <p>
            <span className="font-bold">7PM - 9PM:</span> ...
          </p>
        </div>
      </div>
    </div>
  );
}
