import { useState, useEffect } from 'react';
import styles from './newsletterLink.module.css';

function NewsletterLink() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      NewsletterLink
    </div>
  );
}

export default NewsletterLink;