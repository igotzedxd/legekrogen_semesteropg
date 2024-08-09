import { useState, useEffect } from 'react';
import styles from './deliveryMessage.module.css';

function DeliveryMessage() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      DeliveryMessage
    </div>
  );
}

export default DeliveryMessage;