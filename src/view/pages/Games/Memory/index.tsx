import { ArrowLeftIcon, ReloadIcon } from '@radix-ui/react-icons'
import { useMemoryController } from "./useMemoryController"

import { SingleCard } from "./components/SingleCard";
import { Button } from '../../../components/Button';
import { Link } from 'react-router-dom';
import { Clouds } from '../../../components/Clouds';

export function Memory() {
  const {
    cards,
    choiceOne,
    choiceTwo,
    turns,
    disabled,
    handleChoice,
    shuffleCards
  } = useMemoryController();

  return (
    <div className="bg-gradient-to-b pb-40 from-gray-50 via-cyan-50 to-cyan-100 w-full h-full flex justify-center">
      <div
        id="about-autism"
        className='max-w-4xl gap-12 px-6 pb-10'
      >
        <div className="flex items-center text-cyan-500 gap-6 my-4">
          <Link 
            to="/dashboard"
            className="bg-cyan-50 rounded-full w-12 h-12 flex items-center justify-center border border-cyan-100 cursor-pointer hover:border-cyan-200 transition-all"
          >
            <ArrowLeftIcon className="w-7 h-7" />
          </Link>
          <h1 className="text-4xl font-bold">Jogo da memória</h1>
        </div>


        <div className="flex items-center justify-end text-gray-700 gap-6 mt-10 mb-6">
          <p>Quantidade de jogadas: <b>{turns}</b></p>

          <Button
            onClick={shuffleCards}
            className="bg-white text-cyan-600 shadow hover:bg-cyan-50 active:bg-cyan-100 text-sm md:text-base"
          >
            <ReloadIcon className='w-4 h-4 mr-3' />
            <p>Novo jogo</p>
          </Button>

        </div>
 
        <div className="grid grid-cols-3 sm:grid-cols-4 ga md:gap-8 bg-white p-6 md:p-9 shadow rounded-3xl">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 pt-10 -z-10 overflow-x-hidden">
        <Clouds />
      </div>
    </div>
  )
}