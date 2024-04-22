import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://t.me/savikdev">
          <Image src="/Telegram_logo.svg.webp" alt="" width={18} height={18} />
        </Link>
        <Link href="https://instagram.com/savikdev">
          <Image src="/instagram.png" alt="" width={18} height={18} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCjc2-MWgtGcsEGYa1GM9hlA">
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </Link>
        <Link href="https://www.linkedin.com/in/savikdev/">
          <Image src="/LinkedIn_logo.png" alt="" width={18} height={18} />
        </Link>
      </div>
      <div className={styles.logo}>
        <Link href="/">SavikDev</Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/blog" className={styles.link}>Blogs</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
