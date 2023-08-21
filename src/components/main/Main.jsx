import styles from "./Main.module.scss";
import axios from "axios";
import { useState } from "react";

function Main() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!url) {
      alert("Please enter a url");
      return;
    }

    axios
      .post("http://localhost:3333/api/url/shorten", { longUrl: url })
      .then((res) => {
        setShortUrl(res.data.shortUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setUrl("");
  };

  const copyUrl = async () => {
    if (!shortUrl) {
      setIsCopied(false);
    }
    await navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  };

  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={styles.text}>
        <h1>Make every connection count</h1>
        <p>
          Create short links. Share them anywhere. Track what’s working, and
          what’s not. All inside the CX Connections Platform.
        </p>
      </div>
      <form className={styles.input_field} onSubmit={onSubmit}>
        <input
          type="url"
          placeholder="Paste your url here"
          className={styles.input}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className={styles.button}>Generate Short Link</button>
      </form>
      <div className={styles.link_text}>
        <input
          type="text"
          className={styles.shortened_link}
          value={shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          disabled
        />
        <button
          onClick={copyUrl}
          className={!isCopied ? styles.button : styles.copied_shortened_link}
        >
          {!isCopied && !shortUrl ? "Copy Link" : "Copied!!!"}
        </button>
      </div>
    </section>
  );
}

export default Main;
