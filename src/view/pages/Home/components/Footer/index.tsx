import { InstagramLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

import logoImg from "../../../../../assets/images/logo.png"
import { PageTab } from "../../../../components/PageTab";
import { useHomeController } from "../../useHomeController";

export function Footer() {
  const { scrollTo } = useHomeController();

  return (
    <footer className="bg-gradient-to-r from-cyan-100 to-green-100 rounded-lg shadow">
        <div className="w-full max-w-screen-xl mx-auto px-8 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-between">
            <button onClick={() => scrollTo('introduction')} className="flex items-center">
              <img
                src={logoImg}
                className="h-12 mr-3"
                alt="Auti Logo"
              />
            </button>


            <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <PageTab
                  onClick={() => scrollTo('about-autism')}
                  className="mr-4 md:mr-6"
                >
                  Sobre o autismo
                </PageTab>
              </li>
              <li>
                <PageTab
                  onClick={() => scrollTo('about-project')}
                  className="mr-4 md:mr-6"
                >
                  Sobre o projeto
                </PageTab>
              </li>
              <li>
                <PageTab
                  onClick={() => scrollTo('team')}
                  className="mr-4 md:mr-6 "
                >
                  Nossa equipe
                </PageTab>
              </li>
            </ul>

            <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href='https://www.instagram.com/projetoauti/'
                  target="_blank"
                  className="mr-4 inline-block p-2 border-b-2 border-transparent rounded-t-lg text-gray-800 hover:border-cyan-400 dark:hover:text-cyan-400 transition-all text-sm md:text-base"
                >
                  <InstagramLogoIcon className="h-5 w-5" />
                </a>
              </li>

              <li>
                <a
                  href='https://github.com/brunownk/auti-web'
                  target="_blank"
                  className="mr-4 inline-block p-2 border-b-2 border-transparent rounded-t-lg text-gray-800 hover:border-cyan-400 dark:hover:text-cyan-400 transition-all text-sm md:text-base"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />

          <span className="block text-sm text-gray-600 text-center dark:text-gray-600">
            © 2023 Auti™. Todos os direitos reservados.
          </span>
        </div>
    </footer>
  )
} 