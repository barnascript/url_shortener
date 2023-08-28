import styles from "./Description.module.scss";
import image1 from "../../assets/image1.png";

const Description = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={styles.text_info}>
        <h3>Take your business to the next level! </h3>
        <span>
          Want to brand your short links, create QR codes, and get detailed
          analytics? Get CX for your business and super-charge your link
          management.
        </span>
        <button>Try CX Connections</button>
      </div>
      <img src={image1} alt="hero" />
    </section>
  );
};

export default Description;
