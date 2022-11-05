import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <div className="overlay">
        <div className="black-bg leftSidebar"></div>
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
