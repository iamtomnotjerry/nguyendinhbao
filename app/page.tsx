import Link from 'next/link'
import Day10 from './components/Day10'
import Day5 from './components/Day5'
import Day6 from './components/Day6'
import Day8 from './components/Day8'
import Day9 from './components/Day9'
import Goals from './components/Goals'
import Three66Days from './components/three66days'
import Rules from './components/Rules'
import Day11 from './components/Day11'
import Quote from './components/Quote'
import PerfectDay from './components/PerfectDay'

export default function Home() {
  return (
    <div className=' p-4 bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto flex flex-col gap-6'>
        <h1 className='text-center text-4xl font-bold mb-8 text-gray-800'>2024 - So good that nobody can’t ignore me</h1>
        <Goals/>
        <Quote/>
        <PerfectDay/>
        <Rules/>
        <Three66Days/>
        <Day11/>
        <Day10/>
        <Day9/>
        <Day8/>
        <Day5/>        
      </div>
    </div>
  )
}
