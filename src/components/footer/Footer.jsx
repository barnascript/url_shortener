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
          <ul className={styles.links}>
            <li>Terms and Conditions</li> <li>Privacy Policy</li>{" "}
            <li>Cookie Policy</li> <li>Anti Spam Policy</li>{" "}
            <li>Report abuse</li>
          </ul>
          <small className={styles.rights}>
            CX Connections ©Copyright 2023
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
