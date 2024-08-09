import { useState, useEffect } from 'react';
import styles from './hero.module.css';

function hero() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      hero
    </div>
  );
}

export default hero;