import { useEffect, useState } from "react";


import coalaImg from "../../../../assets/games/memory/images/coala.png"
import girafaImg from "../../../../assets/games/memory/images/girafa.png";
import leaoImg from "../../../../assets/games/memory/images/leao.png";
import macacoImg from "../../../../assets/games/memory/images/macaco.png";
import raposaImg from "../../../../assets/games/memory/images/raposa.png";
import zebraImg from "../../../../assets/games/memory/images/zebra.png";

const cardImg = [
  { src: coalaImg, matched: false },
  { src: girafaImg, matched: false },
  { src: leaoImg, matched: false },
  { src: macacoImg, matched: false },
  { src: raposaImg, matched: false },
  { src: zebraImg, matched: false },
];

export interface Card {
  id: number;
  src: string;
  matched: boolean;
}

export function useMemoryController() {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImg, ...cardImg]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choice
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start new game
  useEffect(() => {
    shuffleCards();
  }, []);

  return {
    cards,
    choiceOne,
    choiceTwo,
    turns,
    disabled,
    shuffleCards,
    handleChoice,
  }
}