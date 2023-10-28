import logoIcon from '../../../assets/images/logo.png';

import { Button } from "../../components/Button";
import { PageTab } from "../../components/PageTab";
import { Waves } from '../../components/Waves';

import { About, Footer, Introduction, Team } from './components';

import { useHomeController } from "./useHomeController";

export function Home() {
  const { navigate, scrollTo } = useHomeController();

  return (
    <div className="h-full w-full flex flex-col">
      <header className="h-12 px-6 lg:px-16 py-10 flex items-center justify-between">
        <img 
          src={logoIcon}
          alt="Auti"
          className='h-14 md:h-[72px]'
        />

        <nav className="hidden items-center gap-6 lg:flex">
          <PageTab onClick={() => scrollTo('about-autism')}>
            Entendendo o autismo
          </PageTab>

          <PageTab onClick={() => scrollTo('about-project')}>
            Sobre o projeto
          </PageTab>

          <PageTab onClick={() => scrollTo('team')}>
            Nossa equipe
          </PageTab>
        </nav>

        <nav className="flex items-center gap-2 lg:gap-10">
          <PageTab onClick={() => navigate('/login')}>Entrar</PageTab>

          <Button 
            onClick={() => navigate('/register')}
            className="bg-white text-cyan-400 shadow hover:bg-cyan-50 active:bg-cyan-100 text-sm md:text-base"
          >
            Registrar
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <Introduction />
        <Waves />
        <About />
        <Team />
        <Footer />
      </main>
    </div>
  )
}