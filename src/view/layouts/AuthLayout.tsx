import { Outlet } from 'react-router-dom';
import logoIcon from '../../assets/images/logo.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <img src={logoIcon} alt="Auti" className='h-16'/>

        <div className='w-full max-w-[504px] px-8'>
          <Outlet />
        </div>
      </div>
      
      <div className="w-1/2 h-full p-8 hidden lg:flex">
      </div>
    </div>
  )
}