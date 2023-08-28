import styles from "./Faqs.module.scss";
import { FcFaq } from "react-icons/fc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import faqData from "./faqData";
import { useState } from "react";

const Faqs = () => {
  const [data, setData] = useState(
    faqData.map((faq) => ({ ...faq, openFaq: false }))
  );

  const toggleFaq = (id) => {
    setData((prevFaq) =>
      prevFaq.map((faq) =>
        faq.id === id ? { ...faq, openFaq: !faq.openFaq } : faq
      )
    );
  };
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.heading}>
          <h2>Frequently Asked Questions</h2>
          <FcFaq className={styles.faq_icon} />
        </div>
        <div className={styles.faqs}>
          {data.map((faq) => (
            <div className={styles.faq} key={faq.id}>
              <div
                className={styles.faq_title}
                onClick={() => toggleFaq(faq.id)}
              >
                <h3>{faq.question}</h3>
                <MdOutlineKeyboardArrowDown className={styles.faq_title_icon} />
              </div>
              {faq.openFaq && (
                <div className={faq.openFaq ? styles.answer : styles.absolute}>
                  {faq.answer}
                </div>
              )}
              <div className={styles.line_break}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
