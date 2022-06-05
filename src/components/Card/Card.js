import { memo } from "react";
import PropTypes from "prop-types";
import "./card.scss";

const Card = ({ currency, number, logo, found, handleClickOnCard, firstSelectedCard, secondSelectedCard }) => {
  // Conditions for the display of a card.
  const isFirstSelectedCard = firstSelectedCard.currency === currency && firstSelectedCard.number === number;
  const isSecondSelectedCard = secondSelectedCard.currency === currency && secondSelectedCard.number === number;
  return (
    <div
      className="card"
      onClick={(e) => {
        isFirstSelectedCard || found ? e.preventDefault() : handleClickOnCard(e, currency, number);
      }}
    >
      <img className={isFirstSelectedCard || isSecondSelectedCard || found ? "" : "hidden"} src={logo} alt={currency} />
    </div>
  );
};

Card.propTypes = {
  currency: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired,
  found: PropTypes.bool.isRequired,
  handleClickOnCard: PropTypes.func,
  firstSelectedCard: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  secondSelectedCard: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default memo(Card);
