import { useState, useEffect } from 'react';
import styles from './header.module.css';

function header() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      header
    </div>
  );
}

export default header;