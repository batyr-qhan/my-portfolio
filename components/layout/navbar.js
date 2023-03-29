import classes from "./navbar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const fadeIn = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className={classes.container}>
      <div></div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6, duration: 2 }}
        className={classes.title}
      >
        <Link href="/">batyr qhan. frontend developer</Link>
      </motion.div>
      <div></div>
      <div></div>
      <div></div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.9, duration: 2 }}
        className={classes.navItem}
      >
        <div className={classes.navItemContent}>
          <Link href="/works/certmate">works</Link>
          <Link href="/works/certmate">works</Link>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2, duration: 2 }}
        className={classes.navItem}
      >
        <div className={classes.navItemContent}>
          <Link href="/contact">contact</Link>
          <Link href="/contact">contact</Link>
        </div>
      </motion.div>
      <div></div>
    </div>
  );
}
