import { useState, useEffect } from 'react';
import styles from './products.module.css';

function Products() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      Products
    </div>
  );
}

export default Products;