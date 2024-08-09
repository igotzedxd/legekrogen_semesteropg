import { useState, useEffect } from 'react';
import styles from './footer.module.css';

function footer() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      footer
    </div>
  );
}

export default footer;