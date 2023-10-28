import { EnterIcon } from '@radix-ui/react-icons'

interface GameCardProps {
  title: string;
  icon: string;
}

export function GameCard({ title, icon }: GameCardProps) {
  return (
    <div className="max-w-xl w-full p-6 bg-white shadow rounded-2xl hover:bg-cyan-50 cursor-pointer transition-all flex items-center justify-between" >
      <div className="flex items-center gap-4">
        <span className="bg-cyan-200 p-4 rounded-full">
          <img src={icon} className="h-14" />
        </span>
  
        <h1 className="text-lg text-gray-700 font-semibold">{title}</h1>
      </div>

      <EnterIcon className="w-6 h-6 text-cyan-900" />
    </div>
  )
}