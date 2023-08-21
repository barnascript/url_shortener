import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <small>barnascript@gmail.com</small> <small>©Copyright 2023</small>
      <small>All rights reserved</small>
    </div>
  );
};

export default Footer;
