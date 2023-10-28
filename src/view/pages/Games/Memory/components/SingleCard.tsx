import { cn } from "../../../../../app/utils/cn";

import coverSVG from "../../../../../assets/games/memory/images/cover.png";

import { Card } from "../useMemoryController";

interface SingleCardProps {
  card: Card,
  flipped: boolean,
  disabled: boolean,
  handleChoice(card: Card): void,
}

export function SingleCard({ card, flipped, disabled, handleChoice }: SingleCardProps) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative cursor-pointer">
      <img 
        src={card.src}
        alt="card"
        className={cn(
          "w-full block bg-white shadow border-2 border-solid border-gray-50 rounded-2xl object-fill rotate-y-90 transition-all absolute",
          flipped && "!rotate-y-0 delay-200"
        )}
      />

      <img
        src={coverSVG}
        alt="cover"
        onClick={handleClick}
        className={cn(
          "w-full block bg-white shadow border-2 border-solid border-gray-50 rounded-2xl object-fill transition-all delay-200",
          flipped && "rotate-y-90 delay-0"
        )}
      />
    </div>
  )
}