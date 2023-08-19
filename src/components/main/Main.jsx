import styles from "./Main.module.scss";

function Main() {
  return (
    <section className={`sw ${styles.wrapper}`}>
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
