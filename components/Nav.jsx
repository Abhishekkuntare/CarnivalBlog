import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            width={50}
            height={35}
          />
        </Link>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/about">
            <li>About</li>
          </Link>

          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
