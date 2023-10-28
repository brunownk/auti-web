import { EnterIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom';

import { cn } from '../../app/utils/cn';

interface GameCardProps {
  title: string;
  icon: string;
  to: string;
  disabled?: boolean;
}

export function GameCard({ title, icon, to, disabled }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      disabled={disabled}
      className={cn(
        "max-w-xl w-full p-6 bg-white shadow rounded-2xl hover:bg-cyan-50 cursor-pointer transition-all flex items-center justify-between gap-10 relative",
        disabled && "cursor-not-allowed opacity-50 bg-gray-100 hover:bg-gray-100"
      )}
    >
      <div className="flex items-center gap-4">
        <span className="bg-cyan-200 p-4 rounded-full">
          <img src={icon} className="h-14" />
        </span>
  
        <h1 className="text-lg text-gray-700 font-semibold">{title}</h1>
      </div>

      <EnterIcon className="w-6 h-6 text-cyan-900 hidden sm:block" />
    </button>
  )
}