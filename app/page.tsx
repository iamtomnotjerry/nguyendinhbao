import Day10 from './components/Day10'
import Day5 from './components/Day5'
import Day8 from './components/Day8'
import Day9 from './components/Day9'
import Goals from './components/Goals'
import Three66Days from './components/three66days'
import Rules from './components/Rules'
import Day11 from './components/Day11'
import Quote from './components/Quote'
import Day12 from './components/Day12'
import Day14 from './components/Day14'

import Day16 from './components/Day16'
import Day17 from './components/Day17'
import Day18 from './components/Day18'
import Day19 from './components/Day19'
import Day20 from './components/Day20'
import Day21 from './components/Day21'

export default function Home() {
  return (
    <div className=' p-4 bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto flex flex-col gap-6'>
        <h1 className='text-center text-4xl font-bold mb-8 text-gray-800'>2024 - So good that nobody can’t ignore me</h1>
        <Goals/>
        <Quote/>
        <Rules/>
        <Three66Days/>
        <Day21/>
        <Day20/>
          <Day19/>
          <Day18/>
          <Day17/>
          <Day16/>
          <Day14/>
          <Day12/>
          <Day11/>
          <Day10/>
          <Day9/>
          <Day8/>
          <Day5/> 
   
      </div>
    </div>
  )
}
