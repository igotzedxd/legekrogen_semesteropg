import { FaF, FaP } from "react-icons/fa6";
import styles from "./footer.module.css";
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.contact}>
          <h3 className="cursive">Kundeservice</h3>
          <span>
            <FaEnvelope />
            <a href="#">kontakt@legehjørnet.dk</a>
          </span>
          <span>
            <FaPhone />
            <p>+45 23 45 67 89</p>
          </span>
        </div>
        <div className={styles.socials}>
          <h3 className="cursive">Følg os</h3>
          <span>
            <FaFacebook />
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
