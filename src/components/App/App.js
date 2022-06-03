import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import cryptoCards from "../../cryptoCards";
import "./App.scss";

const App = () => {
  // State
  const [gameSituation, setGameSituation] = useState([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState({ currency: "", number: "" });
  const [secondSelectedCard, setSecondSelectedCard] = useState({ currency: "", number: "" });
  const [isCardClickable, setIsCardClickable] = useState(true);

  // Functions
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5); // Shuffle array method

  const testCardsRemaining = () => {
    console.log("launch testCardsRemaining");
    const cardRemaining = gameSituation.find((obj) => {
      return obj.found === false;
    });
    console.log("cardRemaining => ", cardRemaining);
  };

  const handleClickOnCard = (e, currency, number) => {
    if (!isCardClickable) return;
    //if () e.preventDefault();

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
    const shuffledCards = shuffleArray(cryptoCards);
    setGameSituation(shuffledCards);
  }, []);

  return (
    <>
      <Cards
        gameSituation={gameSituation}
        firstSelectedCard={firstSelectedCard}
        secondSelectedCard={secondSelectedCard}
        handleClickOnCard={handleClickOnCard}
      />
    </>
  );
};

export default App;
