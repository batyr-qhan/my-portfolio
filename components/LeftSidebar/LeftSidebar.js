import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import styles from "./leftSidebar.module.scss";

export default function LeftSidebar() {
  return (
    <div className={styles.leftSidebarCol}>
      <Link href="https://github.com/batyr-qhan" passHref>
        <a target="_blank" className={styles.iconContainer}>
          <motion.div
            whileHover={{
              translateY: -5,
            }}
          >
            <FaGithub
              size="1.5rem"
              className={styles.icon}
              onClick={() => {}}
            />
          </motion.div>
        </a>
      </Link>

      <Link href="https://www.linkedin.com/in/batyrqh/" passHref>
        <a target="_blank" className={styles.iconContainer}>
          <motion.div
            whileHover={{
              translateY: -5,
            }}
          >
            <FaLinkedin size="1.5rem" className={styles.icon} />
          </motion.div>
        </a>
      </Link>
      <Link href="https://t.me/nthroneo" passHref>
        <a target="_blank" className={styles.iconContainer}>
          <motion.div
            whileHover={{
              translateY: -5,
            }}
          >
            <FaTelegram
              size="1.5rem"
              className={styles.icon}
              onClick={() => {}}
            />
          </motion.div>
        </a>
      </Link>
    </div>
  );
}
