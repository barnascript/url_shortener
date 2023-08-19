import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.header}`}>
        <span className={styles.logo}>@barnascript</span>
        <div className={styles.title}>Url Shortener</div>
        <div className={styles.links}>
          <span>About</span>
          <span>More Apps</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
