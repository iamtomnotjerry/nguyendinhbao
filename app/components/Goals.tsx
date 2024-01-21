import React from 'react';

export default function Goals() {
  return (
    <div className='bg-gradient-to-r from-pink-200 to-pink-200 p-8 rounded-lg shadow-lg mb-8'>
      <h2 className='text-3xl font-bold mb-4 text-black'>
        My Goals: <span className='text-2xl' role='img' aria-label='Cat Emoji'>😺</span>
      </h2>
      <ul className='list-disc list-inside text-lg text-black'>
        <li className='mb-3'>Goal 1: Reach 180 cm height and 80 kg weight - Currently 170 cm and 55 kg</li>
        <li className='mb-3'>Goal 2: Solve 500 LeetCode questions - Current count: 7</li>
        <li className='mb-3'>Goal 3: Create 12 vibrant projects - Current count: 1</li>
        <ul className='list-disc list-inside ml-5'>
          <li className='mb-2'>First: <a className='text-black-400 hover:underline' href='https://bookstoreonline.vercel.app/'>Bookonlinestore</a></li>
        </ul>
        <li className='mb-3'>Goal 4: Achieve an IELTS score of 9 - Current score: 5.5</li>
      </ul>
    </div>
  );
}
