import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/Savik.jpg" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>SavikDev</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <Link href="https://t.me/savikdev">
            <Image src="/Telegram_logo.svg.webp" alt="" width={18} height={18} />
          </Link>
          <Link href="https://instagram.com/savikdev">
            <Image src="/instagram.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCjc2-MWgtGcsEGYa1GM9hlA">
            <Image src="/youtube.png" alt="" width={18} height={18} />
          </Link>
          <Link href="https://www.linkedin.com/in/savikdev">
            <Image src="/LinkedIn_logo.png" alt="" width={18} height={18} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="https://t.me/savikdev">Telegram</Link>
          <Link href="https://instagram.com/savikdev">Instagram</Link>
          <Link href="https://www.youtube.com/channel/UCjc2-MWgtGcsEGYa1GM9hlA">Youtube</Link>
          <Link href="https://www.linkedin.com/in/savikdev">Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
