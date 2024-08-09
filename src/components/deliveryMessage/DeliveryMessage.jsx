import styles from "./deliveryMessage.module.css";
import { FaTruckMoving } from "react-icons/fa";

function DeliveryMessage() {
  return (
    <div className={styles.container}>
      <FaTruckMoving />
      <p>Fri fragt ved køb over 499,-</p>
    </div>
  );
}

export default DeliveryMessage;
