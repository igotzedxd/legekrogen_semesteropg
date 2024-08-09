import { useState, useEffect } from 'react';
import styles from './faq.module.css';

function faq() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      faq
    </div>
  );
}

export default faq;