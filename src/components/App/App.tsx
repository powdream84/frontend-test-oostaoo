import { memo, useCallback, useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import Timer from "../Timer/Timer";
import cryptoCards from "../../cryptoCards";
import "./App.scss";

interface SelectedCard {
  currency: string;
  number: string;
}

const App: React.FC = () => {
  // State
  const [gameSituation, setGameSituation] = useState(cryptoCards);
  const [firstSelectedCard, setFirstSelectedCard] = useState<SelectedCard>({ currency: "", number: "" });
  const [secondSelectedCard, setSecondSelectedCard] = useState<SelectedCard>({ currency: "", number: "" });
  const [isCardClickable, setIsCardClickable] = useState(true);
  const [isVictory, setIsVictory] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [timerValue, setTimerValue] = useState(0);

  // Functions
  const testVictory = useCallback(() => {
    const victory = gameSituation.find((obj) => {
      return obj.found === false;
    });
    if (victory === undefined) setIsVictory(true);
  }, [gameSituation]);

  const handleClickOnCard = (e: React.MouseEvent<HTMLElement>, currency: string, number: string) => {
    if (!isCardClickable) return;
    // if this is the first card we select
    if (firstSelectedCard.currency.length === 0) {
      setFirstSelectedCard({ currency: currency, number: number });
    }
    // if a card was already selected before
    else {
      setSecondSelectedCard({ currency: currency, number: number });
      // if they match
      if (currency === firstSelectedCard.currency && number !== firstSelectedCard.number) {
        let newGameSituation = gameSituation.map((obj, index) => {
          if (obj.currency === currency) return { ...obj, found: true };
          else return obj;
        });
        setGameSituation(newGameSituation);
      }
      // in all situations
      setIsCardClickable(false);
      setTimeout(() => {
        setFirstSelectedCard({ currency: "", number: "" });
        setSecondSelectedCard({ currency: "", number: "" });
        setIsCardClickable(true);
      }, 750);
    }
  };

  useEffect(() => {
    testVictory();
  }, [secondSelectedCard, testVictory]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimerValue((timerValue) => {
        //console.log(timerValue);
        if (timerValue < 100) {
          return timerValue + 1;
        } else {
          clearInterval(interval);
          setIsModalOpened(true);
          return timerValue;
        }
      });
    }, 750);
  }, []);

  useEffect(() => {
    if (isVictory) setIsModalOpened(true);
  }, [isVictory]);

  //console.log("rerender");
  return (
    <>
      <Cards
        gameSituation={gameSituation}
        firstSelectedCard={firstSelectedCard}
        secondSelectedCard={secondSelectedCard}
        handleClickOnCard={handleClickOnCard}
      />
      <Modal isOpened={isModalOpened} message={isVictory ? "Congratulations !" : "Game over ..."} />
      <Timer timerValue={timerValue} />
    </>
  );
};

export default memo(App);
