import { memo } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import "./cards.scss";

const Cards = ({ gameSituation, firstSelectedCard, secondSelectedCard, handleClickOnCard }) => {
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

Cards.propTypes = {
  gameSituation: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      logo: PropTypes.node.isRequired,
      found: PropTypes.bool.isRequired,
    })
  ),
  firstSelectedCard: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  secondSelectedCard: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  handleClickOnCard: PropTypes.func,
};

export default memo(Cards);
