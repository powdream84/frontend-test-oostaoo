import { memo } from "react";
import { ModalProps } from "../../interfaces";
import "./modal.scss";

const Modal = ({ isOpened, message }: ModalProps) => {
  const playAgain = () => {
    window.location.reload();
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

export default memo(Modal);
