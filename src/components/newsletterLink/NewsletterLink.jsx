import styles from "./newsletterLink.module.css";

function NewsletterLink({ handleShowForm }) {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <p>Kunne du også tænke dig at blive medlem af vores</p>
        <h2 className="cursive">Kundeklub?</h2>
        <button onClick={handleShowForm}>BLIV MEDLEM NU!</button>
      </div>
    </div>
  );
}

export default NewsletterLink;
