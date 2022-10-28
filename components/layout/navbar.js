import classes from "./navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={classes.container}>
      <div></div>
      <div className={classes.title}>
        <Link href="/">batyr qhan. frontend developer</Link>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className={classes.navItem}>
        <Link href="/work">work</Link>
      </div>
      <div className={classes.navItem}>
        <Link href="/contact">contact</Link>
      </div>
      <div></div>
    </div>
  );
}
