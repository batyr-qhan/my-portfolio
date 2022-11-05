import Link from "next/link";
import styles from "./projectPageLayout.module.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ProjectPageLayout({ children }) {
  return (
    <div className="container">
      <div className={styles.leftSidebarCol}>
        <Link href="https://github.com/batyr-qhan" passHref>
          <a target="_blank">
            <FaGithub
              size="1.5rem"
              className={styles.icon}
              onClick={() => {}}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/batyrqh/" passHref>
          <a target="_blank">
            <FaLinkedin size="1.5rem" className={styles.icon} />
          </a>
        </Link>
      </div>
      {children}
      <div></div>
    </div>
  );
}
