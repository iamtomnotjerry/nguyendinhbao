import React from 'react';

export default function Day10() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg p-6 mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-4">Day 10/366</h2>
      <div className="flex gap-4">
        <div>
          <p className="text-lg">Energy</p>
          <div className="flex items-center justify-center rounded-full bg-red-500 text-white font-bold py-2 px-4">-100/100</div>
        </div>
        <div>
          <p className="text-lg">Discipline:</p>
          <div className="flex items-center justify-center rounded-full bg-red-500 text-white font-bold py-2 px-4">-100/100</div>
        </div>
        <div>
          <p className="text-lg">Focus:</p>
          <div className="flex items-center justify-center rounded-full bg-red-500 text-white font-bold py-2 px-4">-100/100</div>
        </div>
        <div>
          <p className="text-lg">Excellence:</p>
          <div className="flex items-center justify-center rounded-full bg-red-500 text-white font-bold py-2 px-4">-100/100</div>
        </div>
        <div>
          <p className="text-lg">Happy:</p>
          <div className="flex items-center justify-center rounded-full bg-red-500 text-white font-bold py-2 px-4">-100/100</div>
        </div>
      </div>
      <p className="text-lg mt-4">Try to be better than yourself just 1 score: -500</p>
      <ul className="list-disc ml-8">
        <li>4AM: Get Up</li>
        <li>4AM-4:15AM: Skincare + Ted Videos</li>
        <li>4:15AM-4:30AM: Read Goals</li>
        <li>4:30AM-5AM: YOGA</li>
        <li>5AM-6AM: Goal 6:ML+AI+Linear regression</li>
        <li>6AM-7AM: Breaskfast + Ted Videos</li>
        <li>7AM-11AM: Goal 6:ML+AI+Linear regression</li>
        <li>11AM-1PM: Lunch + Ted Videos</li>
        <li>1PM-2PM: GYM + Ted Videos</li>
        <li>2PM-2:30PM: Take a shower + Ted Videos</li>
        <li>2:30PM-5PM: Goal 6:ML+AI+Linear regression</li>
        <li>5PM-7PM: Dinner + Ted Videos</li>
        <li>7PM-8PM: Goal 6:ML+AI+Linear regression</li>
        <li>8PM-8:15PM: Skincare</li>
        <li>8:15PM-8:45PM: Journal</li>
        <li>8:45PM-9PM: Plan for tmw</li>
        <li>9PM: Go to bed</li>
      </ul>
    </div>
  );
}
