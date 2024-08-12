import { useState, useEffect } from "react";
import styles from "./newsletterMessage.module.css";

function NewsletterMessage() {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Your effect logic here
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className="cursive">Tak!</h1>
        <p>Vi er så glade for at du vil være en del af vores kundeklub.</p>
        <p>
          Tag et kig i din indbakke. Vi har givet dig fri fragt på din første
          ordre.
        </p>
      </div>
    </div>
  );
}

export default NewsletterMessage;
