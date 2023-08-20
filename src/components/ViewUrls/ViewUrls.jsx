import { useEffect, useState } from "react";
import styles from "./ViewUrls.module.scss";

const ViewUrls = () => {
  const [urls, setUrls] = useState([]);

  //   useEffect(() => {
  //     const fetchUrlandSetUrl = async () => {
  //       const result = await fetch("http://localhost:3333/all");
  //       setUrls(result.data);
  //     };
  //     fetchUrlandSetUrl();
  //   }, [urls]);
  return (
    <div className={styles.wrapper}>
      {urls.map((url, idx) => (
        <div key={idx}>
          span
          <span>{url.originalUrl}</span>
          <a href={`${url.shortUrl}`}>{url.shortUrl}</a>
          <div>{url.clicks}</div>
        </div>
      ))}
    </div>
  );
};

export default ViewUrls;
