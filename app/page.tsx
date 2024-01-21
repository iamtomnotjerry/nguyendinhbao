
import Goals from './components/Goals'
import Three66Days from './components/three66days'


export default function Home() {
  return (
    <div className=' p-4 bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto flex flex-col gap-6'>
        <h1 className='text-center text-4xl font-bold mb-8 text-gray-800'>2024 - So good that nobody can’t ignore mee</h1>
        <Goals/>
        <Three66Days/>
      </div>
    </div>
  )
}
