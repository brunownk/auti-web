import firstCardIcon from "../../../assets/images/enigma.png";
import secondCardIcon from "../../../assets/images/terapia-animal.png";
import thirdIcon from "../../../assets/images/blocos.png";
import fourthIcon from "../../../assets/images/completar.png";

import { Clouds } from "../../components/Clouds";
import { GameCard } from "../../components/GameCard";

export function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-cyan-50 to-cyan-100 w-full h-full grid place-content-center">
      <div
        className='w-full max-w-7xl p-20 grid place-items-center auto-rows-max lg:grid-cols-2 gap-20'
      >
        <GameCard
          title="Jogo da memória"
          icon={firstCardIcon}
          to="/game/memory"
        />

        <GameCard
          title="Quebra-cabeça"
          icon={secondCardIcon}
          to="/game/puzzle"
          disabled
        />

        <GameCard
          title="Alfabeto"
          icon={thirdIcon}
          to="/game/alphabet"
          disabled
        />

        <GameCard
          title="Completar a frase"
          icon={fourthIcon}
          to="/game/complete-the-sentence"
          disabled
        />
      </div>

      <div className="absolute top-0 right-0 left-0 bottom-0 pt-10 -z-10 overflow-x-hidden">
        <Clouds />
      </div>
    </div>
  )
}