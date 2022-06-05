import { memo } from "react";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ isOpened, message }) => {
  const playAgain = () => {
    window.location.reload(false);
  };
  return (
    <div className={`modal ${isOpened ? "visible" : "hidden"}`}>
      <div>
        <h3>{message}</h3>
        <button onClick={playAgain}>Play again</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpened: PropTypes.bool,
  message: PropTypes.string,
};

export default memo(Modal);
