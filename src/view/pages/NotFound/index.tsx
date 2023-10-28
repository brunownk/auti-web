import notFoundIlustrationImg from '../../../assets/images/not-found.png'
import { Button } from '../../components/Button'

import { useNotFoundController } from "./useNotFoundController";

export function NotFound () {
  const { handleButtonClick } = useNotFoundController();

  return (
    <div className="w-full h-full flex items-center justify-center bg-pink-400 gap-44">
      <div className='flex items-center justify-center flex-col gap-8 text-white'>
        <h1 className='text-7xl font-bold'>
          Oops!
        </h1>

        <p className="text-xl font-semibold">
          Você está perdido
        </p>

        <Button 
          onClick={handleButtonClick}
          className="bg-pink-500 mt-8 hover:bg-pink-600"
        >
          Voltar para a página inicial
        </Button>
      </div>

      <img src={notFoundIlustrationImg} className="h-[360px]" />
    </div>
  )
}