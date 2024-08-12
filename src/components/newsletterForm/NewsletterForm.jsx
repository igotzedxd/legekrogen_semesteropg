import { useState, useEffect, useRef } from "react";
import usePost from "../../hooks/usePost";
import styles from "./newsletterForm.module.css";

function NewsletterForm({onSubmitSuccess}) {
  const [nameValue, setNameValue] = useState("");
  const [mailValue, setMailValue] = useState("");
  const [msgValue, setMsgValue] = useState("");
  const { post, loading, error, data } = usePost("https://legekrogen.webmcdm.dk/subscribe");
  const nameRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      name: nameValue,
      email: mailValue,
      message: msgValue,
    };

    post(postData).then(() => {
      onSubmitSuccess();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            nameRef.current.focus();
          }
        });
      },
      {
        root: null, // bruger viewport
        threshold: 0.3, // trigger når form er 30% synlig
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.container}>
      <input required
        ref={nameRef}
        type="text"
        placeholder="Fulde Navn"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <input required
        type="email"
        placeholder="Email"
        value={mailValue}
        onChange={(e) => setMailValue(e.target.value)}
      />
      <textarea required
        className={styles.largeInput}
        placeholder="Hvem køber du legetøj til?"
        value={msgValue}
        onChange={(e) => setMsgValue(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Sender..." : "BLIV MEDLEM NU!"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && <p style={{ color: "green" }}>Tak for din tilmelding!</p>}
    </form>
  );
}

export default NewsletterForm;
