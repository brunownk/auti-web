import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom';

interface TeamCardProps {
  src: string;
  name: string;
  to: string;
}

export function TeamCard({ src, name, to }: TeamCardProps) {
  return (
    <Link
      to={to}
      target='_blank'
      className="w-full h-[240px] rounded-2xl bg-white relative"
    >
      <span className="w-full absolute bg-gray-50 p-2 rounded-b-2xl  bottom-[-1px] flex items-center justify-center gap-1 traspar bg-opacity-80">
        <p className="text-sm text-center text-gray-700 font-semibold">{name}</p>
        <LinkedInLogoIcon className='text-sky-800' />
      </span>

      <img 
        src={src}
        className='w-full h-[240px] rounded-2xl object-cover shadow'
      />
    </Link>
  )
}