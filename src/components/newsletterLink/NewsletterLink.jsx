import styles from "./newsletterLink.module.css";

function NewsletterLink() {
  return (
    <div className={styles.container}>
      <p>Kunne du også tænke dig at blive medlem af vores</p>
      <h2 className="cursive">Kundeklub?</h2>
      <button>
        <a href="/kundeklub">BLIV MEDLEM NU!</a>
      </button>
    </div>
  );
}

export default NewsletterLink;
