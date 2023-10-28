import { Link } from "react-router-dom";
import { InstagramLogoIcon } from '@radix-ui/react-icons'

import logoImg from "../../../../assets/images/logo.png"
import { PageTab } from "../../../components/PageTab";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-cyan-100 to-yellow-100 rounded-lg shadow">
        <div className="w-full max-w-screen-xl mx-auto px-8 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src={logoImg}
                className="h-12 mr-3"
                alt="Auti Logo"
              />
            </Link>


              <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <PageTab to="#" className="mr-4 md:mr-6 ">
                    Sobre o autismo
                  </PageTab>
                </li>
                <li>
                  <PageTab to="#" className="mr-4 md:mr-6 ">
                    Sobre o projeto
                  </PageTab>
                </li>
                <li>
                  <PageTab to="#" className="mr-4 md:mr-6 ">
                    Nossa equipe
                  </PageTab>
                </li>
                <li>
                  <PageTab to="#" className="mr-4 md:mr-6 ">
                    Contato
                  </PageTab>
                </li>
              </ul>

              <PageTab to="#" className="mr-4 md:mr-6 ">
                <InstagramLogoIcon className="h-5 w-5" />
              </PageTab>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-600 lg:my-8" />

          <span className="block text-sm text-gray-600 text-center dark:text-gray-600">
            © 2023 Auti™. Todos os direitos reservados.
          </span>
        </div>
    </footer>
  )
} 