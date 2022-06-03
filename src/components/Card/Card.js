import "./card.scss";

const Card = ({ currency, number, logo, found, handleClickOnCard, firstSelectedCard, secondSelectedCard }) => {
  // Conditions for the display of a card.
  const isFirstSelectedCard = firstSelectedCard.currency === currency && firstSelectedCard.number === number;
  const isSecondSelectedCard = secondSelectedCard.currency === currency && secondSelectedCard.number === number;

  return (
    <div className="card" onClick={(e) => handleClickOnCard(e, currency, number)}>
      <img className={`${isFirstSelectedCard || isSecondSelectedCard || found ? "" : "hidden"}`} src={logo} alt={currency} />
    </div>
  );
};

export default Card;
