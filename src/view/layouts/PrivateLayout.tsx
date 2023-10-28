import { Outlet, Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.png';
import { UserMenu } from '../components/UserMenu';

export function PrivateLayout() {

  return (
    <div className="w-full h-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
      <header className="h-12 flex items-center justify-between">
        <Link to="/dashboard">
          <img 
            src={logoIcon}
            alt="Auti"
            className='h-16 cursor-pointer'
          />
        </Link>

        <UserMenu />
      </header>

      <main className="flex-1 flex flex-col gap-4 max-h-full">
        <Outlet />
      </main>
    </div>
  )
}