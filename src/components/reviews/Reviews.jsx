import { useState, useEffect } from 'react';
import styles from './reviews.module.css';

function Reviews() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      Reviews
    </div>
  );
}

export default Reviews;