import { Outlet, Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.png';
import { UserMenu } from '../components/UserMenu';

export function PrivateLayout() {

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <header className="h-12 flex items-center justify-between p-4 md:px-8 md:mb-8 md:mt-6">
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