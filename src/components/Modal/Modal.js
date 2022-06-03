import "./modal.scss";

const Modal = ({ isOpened, message, closeModal }) => {
  const close = () => {
    console.log("close");
  };
  return (
    <div className={`modal ${isOpened ? "visible" : "hidden"}`} onClick={closeModal}>
      <div>{message}</div>
    </div>
  );
};

export default Modal;
