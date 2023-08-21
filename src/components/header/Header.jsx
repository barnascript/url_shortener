import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.header}`}>
        <div className={styles.title}>Url Shortener</div>
        <div className={styles.links}>
          <span>About</span>
          <span>More Apps</span>
        </div>
        {!openMenu && (
          <RxHamburgerMenu
            className={styles.hamburger}
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        {openMenu && (
          <LiaTimesSolid
            className={styles.times}
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        {openMenu && (
          <div className={styles.mobile_links}>
            <span>About</span>
            <span>More Apps</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
