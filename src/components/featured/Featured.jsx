import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, SavikDev here!</b> Read other people's blogs or create your own blog.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/header_img.avif" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to the blog site created by SavikDev!</h1>
          <p className={styles.postDesc}>
            On this blog site, you can read food blogs written by others and blog yourself by registering! Subscribe to SavikDev social accounts!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
