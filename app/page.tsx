import Day5 from './components/Day5'
import Goals from './components/Goals'

export default function Home() {
  return (
    <div className='p-4 bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-center text-4xl font-bold mb-8 text-gray-800'>2024 - So good that nobody can’t ignore me</h1>
        <Goals/>
        <Day5/>
      </div>
    </div>
  )
}
