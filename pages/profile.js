import Nav from "../comp/nav";
import styles from "./All.module.css";

export default function Profile(){
  return (
    <div className={styles.all}>
      <Nav />
      <h1>My Profile</h1>
      <p>What do you mean, my profile?</p>
      <small><a href="https://repl.it/@coder100" target="_blank" class>Check out my repl.it profile!</a></small>
    </div>
  );
}
