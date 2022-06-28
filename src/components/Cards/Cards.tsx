import { memo } from "react";
import Card from "../Card/Card";
import { CardsProps } from "../../interfaces";
import "./cards.scss";

const Cards = ({ gameSituation, firstSelectedCard, secondSelectedCard, handleClickOnCard }: CardsProps) => {
  //console.log(gameSituation);
  let listOfCards = gameSituation.map((obj, index) => (
    <Card
      key={`cards-card-${index}`}
      currency={obj.currency}
      number={obj.number}
      logo={obj.logo}
      found={obj.found}
      handleClickOnCard={handleClickOnCard}
      firstSelectedCard={firstSelectedCard}
      secondSelectedCard={secondSelectedCard}
    />
  ));
  return <div className="cards-container">{listOfCards}</div>;
};

export default memo(Cards);
