import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`fw ${styles.wrapper1}`}>
        <span className={`sw ${styles.powered_by}`}>
          <i>Powered by</i> <b>CX Connections</b>
        </span>
      </div>
      <div className={`fw ${styles.wrapper_2}`}>
        <div className={`sw ${styles.container}`}>
          <div className={styles.links}>
            <span>Terms and Conditions</span> <span>Privacy Policy</span>{" "}
            <span>Cookie Policy</span> <span>Anti Spam Policy</span>{" "}
            <span>Report abuse</span>
          </div>
          <small className={styles.rights}>
            CX Connections ©Copyright 2023
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
