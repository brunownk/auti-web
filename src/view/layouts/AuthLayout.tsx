import { Outlet, Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.png';
import ilustraImg from '../../assets/images/ilustra-02.png';

export function AuthLayout() {

  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex items-center justify-center flex-col gap-12 lg:w-1/2">
        <Link to="/">
          <img 
            src={logoIcon}
            alt="Auti"
            className='h-[74px] cursor-pointer'
          />
        </Link>

        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      
      <div className="w-1/2 h-full justify-center items-center relative hidden lg:flex">
        <div className="bg-cyan-200 w-full h-full select-none rounded-s-[32px] grid place-items-center shadow-sm">
          <img src={ilustraImg} className="h-[440px]" />
        </div>
      </div>
    </div>
  )
}