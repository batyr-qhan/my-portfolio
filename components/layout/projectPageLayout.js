import Link from "next/link";
import styles from "./projectPageLayout.module.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

export default function ProjectPageLayout({ children }) {
  return (
    <div className="container">
      <LeftSidebar />
      {children}
      <div></div>
    </div>
  );
}
