import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav(){
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </div>
  );
}
