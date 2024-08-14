import { useState } from "react";
import styles from "./faq.module.css";
import useFetch from "../hooks/useFetch";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import parse from "html-react-parser";

function Faq() {
  const { data: questions, error } = useFetch("https://legekrogen.webmcdm.dk/questions");
  const [openIds, setOpenIds] = useState([]);

  const toggleOpenId = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const addDashesToText = (htmlContent) => {
    // Replace <p> and <li> tags with a dash followed by the original content
    console.log("htmlcontent", htmlContent);
    const modifiedContent = htmlContent.replace(/<li>/g, "<li>- ");
    console.log("modifiedcontent", modifiedContent);

    return parse(modifiedContent);
  };

  if (error) {
    return <p className={styles.error}>Error: {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      {questions ? (
        questions.map((q) => (
          <div key={q._id} onClick={() => toggleOpenId(q._id)} className={styles.faq}>
            {/* render question */}
            <p className={styles.q}>{q.question}</p>
            {/* line to seperate Q and A (::before and ::after styling and keyframes*/}
            {openIds.includes(q._id) && <p className={styles.line}></p>}
            {/* instead of styling display none, we just don't render it unless the container is clicked */}
            {openIds.includes(q._id) && <div className={styles.a}>{addDashesToText(q.answer)}</div>}
            {/* show up or down arrow depending if the container is clicked */}
            {openIds.includes(q._id) ? (
              <IoIosArrowUp className={styles.arrow} />
            ) : (
              <IoIosArrowDown className={styles.arrow} />
            )}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Faq;
