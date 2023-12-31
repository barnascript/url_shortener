import styles from "./Main.module.scss";
import axios from "axios";
import { useState } from "react";

function Main() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!url) {
      alert("Please enter a url");
      return;
    }
    setIsLoading(true);

    axios
      .post("/api/url/shorten", { longUrl: url })
      .then((res) => {
        setShortUrl(res.data.shortUrl);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setUrl("");
  };

  const copyUrl = async () => {
    if (!shortUrl) {
      return null;
    }
    await navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
  };

  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={styles.text}>
        <h1>Your Free Url Shortener</h1>
        <p>
          This is a clone. The Original Concept is
          <a href="http://rebrandly.com"> found here</a>.
        </p>
      </div>
      <form className={styles.input_field} onSubmit={onSubmit}>
        <input
          type="url"
          placeholder="Enter your link here"
          className={styles.input}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button className={styles.button}>Shorten Link</button>
      </form>
      <div className={styles.link_text}>
        <input
          type="text"
          className={styles.shortened_link}
          value={isLoading ? "Loading..." : shortUrl}
          onChange={(e) => setShortUrl(e.target.value)}
          disabled
          placeholder="shortened link would appear here"
        />
        <button
          onClick={copyUrl}
          className={
            !isCopied ? styles.copy_button : styles.copied_shortened_link
          }
        >
          {!isCopied ? "Copy Link" : "Copied!!!"}
        </button>
      </div>
    </section>
  );
}

export default Main;
