import { useState } from "react";
import NewsletterLink from "../newsletterLink/NewsletterLink";
import NewsletterForm from "../newsletterForm/NewsletterForm";
import NewsletterMessage from "../newsletterMessage/NewsletterMessage";
/* import styles from './newslettercontainer.module.css'; */

function NewsletterContainer() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleFormSubmitted = () => {
    setFormSubmitted(true);
  };

  return (
    <div>
      {formSubmitted ? (
        <NewsletterMessage />
      ) : showForm ? (
        <NewsletterForm onSubmitSuccess={handleFormSubmitted} />
      ) : (
        <NewsletterLink handleShowForm={handleShowForm} />
      )}
    </div>
  );
}

export default NewsletterContainer;
