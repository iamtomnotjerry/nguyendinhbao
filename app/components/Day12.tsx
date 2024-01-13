import React from 'react';

export default function Day12() {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-lg p-6 mx-auto shadow-md">
      <h2 className="text-3xl font-bold mb-4">Day 12/366</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Things I have done today:</h3>
          <ul className="list-disc pl-4">
            <li>Watched TED: Inside the mind of a master procrastinator</li>
            <li><a href="https://www.youtube.com/embed/arj7oStGLkU?si=5j6FIJZznL1gBuHZ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watch the video</a></li>
            <li>6 contributions on GitHub</li>
            <li>Ran 1 km</li>
            <li>Push-ups 100 times</li>
            <li>Pull-ups 30 times</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Daily Metrics:</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">75</span>
              </div>
              <p className="ml-4">Energy</p>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-green-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">90</span>
              </div>
              <p className="ml-4">Discipline</p>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">85</span>
              </div>
              <p className="ml-4">Focus</p>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">95</span>
              </div>
              <p className="ml-4">Excellence</p>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">80</span>
              </div>
              <p className="ml-4">Happy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
