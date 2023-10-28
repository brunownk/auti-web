import { Clouds } from "../../components/Clouds";

export function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-cyan-50 to-cyan-100 w-full h-full relative">
      <div className="pt-10 overflow-x-hidden">
        <Clouds />
      </div>

      <div
        id="about-autism"
        className='w-full max-w-7xl flex flex-col-reverse gap-12 lg:flex-row items-center justify-around'
      >
        
      </div>
    </div>
  )
}