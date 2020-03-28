import Nav from "../comp/nav";
import styles from "./All.module.css";

export default function Index(){
  return (
    <div className={styles.all}>
      <Nav />
      <h1>Hello Next.js!</h1>
      <p>Hello world!</p>
      <small>Hello repl.it!</small>
    </div>
  );
}
