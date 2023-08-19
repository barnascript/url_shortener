import styles from "./Main.module.scss";

function Main() {
  return (
    <section className={`sw ${styles.wrapper}`}>
      Make every connection count Create short links, QR Codes, and Link-in-bio
      pages. Share them anywhere. Track what’s working, and what’s not. All
      inside the Bitly Connections Platform.
      <div className={styles.input_field}>
        <input
          type="text"
          placeholder="Paste your url here"
          className={styles.input}
        />
        <button className={styles.button}>Generate Link</button>
      </div>
    </section>
  );
}

export default Main;
