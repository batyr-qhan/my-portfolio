import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <>
      <div className="overlay">
        <div className="black-bg leftSidebar">
          <FaGithub size="1.5rem" className="icon" />
          <FaLinkedin size="1.5rem" className="icon" />
          <FaTwitter size="1.5rem" className="icon" />
        </div>
        <div className="black-bg"></div>
        <div className="black-bg"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="wrapper">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
