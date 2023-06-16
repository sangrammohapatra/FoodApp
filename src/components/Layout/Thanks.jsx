import Modal from "../UI/Modal";
import Class from "./Thanks.module.css";

const ThankYou = (props) => {
  return (
    <Modal onClose={props.onClose}>
        <div className={Class["thank-you"]}>
          <span className={Class.text}>Thank You!</span>
          <span className={Class.order}>Your Order has been placed !!</span>
        </div>
    </Modal>
  );
};

export default ThankYou;
