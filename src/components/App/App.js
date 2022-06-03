import { memo, useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import Modal from "../Modal/Modal";
import cryptoCards from "../../cryptoCards";
import "./App.scss";

const App = () => {
  // State
  const [gameSituation, setGameSituation] = useState(cryptoCards);
  const [firstSelectedCard, setFirstSelectedCard] = useState({ currency: "", number: "" });
  const [secondSelectedCard, setSecondSelectedCard] = useState({ currency: "", number: "" });
  const [isCardClickable, setIsCardClickable] = useState(true);
  const [isVictory, setIsVictory] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);

  // Functions

  function refreshPage() {
    window.location.reload(false);
  }

  const closeModal = () => {
    setIsModalOpened(false);
    refreshPage();
  };

  const testVictory = () => {
    console.log("testVictory");
    const victory = gameSituation.find((obj) => {
      return obj.found === false;
    });
    if (victory === undefined) setIsVictory(true);
  };

  const handleClickOnCard = (e, currency, number) => {
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
      }, 2000);
    }
  };

  useEffect(() => {
    testVictory();
  }, [secondSelectedCard]);

  useEffect(() => {
    if (isVictory) setIsModalOpened(true);
  }, [isVictory]);

  return (
    <>
      <Cards
        gameSituation={gameSituation}
        firstSelectedCard={firstSelectedCard}
        secondSelectedCard={secondSelectedCard}
        handleClickOnCard={handleClickOnCard}
      />
      <Modal isOpened={isModalOpened} message={isVictory ? "Congratulations !" : "Game over !"} closeModal={closeModal} />
    </>
  );
};

export default memo(App);
