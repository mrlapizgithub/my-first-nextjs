import Nav from "../comp/nav";
import styles from "./All.module.css";

export default function Index(){
  return (
    <div className={styles.all}>
      <Nav />
      <h1>About</h1>
      <p>This was created by coder100 on his windows 10. Hosted with Zeit.co which was made for Next.js!</p>
      <small>Hello repl.it!</small>
    </div>
  );
}
