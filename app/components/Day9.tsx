import React from 'react';

export default function Day9() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg p-6 mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-4">Day 9/366</h2>
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
        <li>5AM: Get Up</li>
        <li>5AM-5:15AM: Skincare</li>
        <li>5:15AM-5:30AM: Read Goals</li>
        <li>5:30AM-6AM: YOGA</li>
        <li>6AM-7AM: Breakfast</li>
        <li>7AM-11AM: Giveandtake ppt</li>
        <li>11AM-1PM: Lunch</li>
        <li>1PM-2PM: GYM</li>
        <li>2PM-2:30PM: Take a shower</li>
        <li>2:30PM-5PM: Computer System</li>
        <li>5PM-7PM: Dinner</li>
        <li>7PM-8PM: Leetcode</li>
        <li>8PM-8:30PM: Submit google hackathon</li>
        <li>8:30PM-9PM: Skincare</li>
        <li>10PM: Go to bed</li>
      </ul>
    </div>
  );
}
