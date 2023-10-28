import logoIcon from '../../../assets/images/logo.png';

import { Button } from "../../components/Button";
import { PageTab } from "../../components/PageTab";

import { useHomeController } from "./useHomeController";
import { Waves } from '../../components/Waves';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Introduction } from './components/Introduction';
import { Team } from './components/Team';

export function Home() {
  const { navigate } = useHomeController();

  return (
    <div className="h-full w-full flex flex-col">
      <header className="h-12 px-6 lg:px-16 py-10 flex items-center justify-between">
        <img 
          src={logoIcon}
          alt="Auti"
          className='h-14 md:h-[72px]'
        />

        <nav className="hidden items-center gap-6 lg:flex">
          <PageTab to="/">Entendendo o autismo</PageTab>
          <PageTab to="/">Sobre o projeto</PageTab>
          <PageTab to="/">Nossa equipe</PageTab>
          <PageTab to="/">Contato</PageTab>
        </nav>

        <nav className="flex items-center gap-2 lg:gap-10">
          <PageTab to="/login">Entrar</PageTab>
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