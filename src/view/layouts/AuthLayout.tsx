import { Outlet } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.png';
import ilustraImg from '../../assets/images/ilustra-02.png';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <img src={logoIcon} alt="Auti" className='h-16'/>

        <div className="w-full max-w-[504px] px-8">
          <Outlet />
        </div>
      </div>
      
      <div className="w-1/2 h-full justify-center items-center p-8 relative hidden lg:flex">
        <div className="bg-cyan-300 w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px] grid place-items-center shadow-sm">
          <img src={ilustraImg} className="h-[460px] mb-32" />

          <div className="max-w-[656px] bottom-8 bg-white px-8 pt-6 pb-8 mx-8 absolute rounded-b-[32px]">
            <img src={logoIcon} alt="Auti" className='h-16'/>

            <p className="text-gray-700 font-medium text-xl mt-3">
              Um espaço seguro e divertido para o desenvolvimento do seu pequeno!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}