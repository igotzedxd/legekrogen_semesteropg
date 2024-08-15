import styles from "./deliveryMessage.module.css";
import { FaTruckMoving } from "react-icons/fa";

function DeliveryMessage() {
  const currentHour = new Date().getHours();

  const message =
    currentHour >= 16
      ? "Fri fragt I MORGEN ved køb over 499,- !"
      : "Fri fragt I DAG ved køb over 499,- !";

  return (
    <div className={styles.container}>
      <FaTruckMoving />
      <p>{message}</p>
    </div>
  );
}

export default DeliveryMessage;
