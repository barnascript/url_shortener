import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <small className={styles.email}>barnascript@gmail.com</small>{" "}
      <small className={styles.copyright}>©Copyright 2023</small>
      <small className={styles.rights}>All rights reserved</small>
    </div>
  );
};

export default Footer;
