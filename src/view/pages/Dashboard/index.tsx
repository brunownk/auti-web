import firstCardIcon from "../../../assets/images/enigma.png";
import secondCardIcon from "../../../assets/images/terapia-animal.png";


import { Clouds } from "../../components/Clouds";
import { GameCard } from "../../components/GameCard";

export function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-cyan-50 to-cyan-100 w-full h-full">
      <div
        className='w-full max-w-7xl h-full flex flex-col items-center justify-center gap-20'
      >
        <GameCard
          title="Que som é esse?"
          icon={firstCardIcon}
        />

        <GameCard
          title="Quebra-cabeça"
          icon={secondCardIcon}
        />
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 pt-10 -z-10 overflow-x-hidden">
        <Clouds />
      </div>
    </div>
  )
}