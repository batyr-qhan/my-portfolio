import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext, useEffect, useState, useTransition } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { AppContext } from "../store/app-context";
import MyModal from "../components/MyModal/MyModal";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [testimonialsCurrSlide, setTestimonialsCurrSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalCurrSlide, setModalCurrSlide] = useState(0);

  const appCtx = useContext(AppContext);

  const { openFooter, isFooterOpen } = appCtx;

  const imageRefs = [
    "/images/mainScreenPhoto1.webp",
    "/images/mainScreenPhoto2.webp",
  ];

  const resumeImagePaths = ["/images/my_cv_png.webp", "/images/my_cv_png2.webp"];

  return (
    <>
      <Head>
        <title>BtQ Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon_bt.ico" />
      </Head>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {showModal && (
          <MyModal
            modalOpen={showModal}
            handleClose={() => {
              setShowModal(false);
            }}
          >
            <div className={styles.showResumeImageContainer}>
              <Image
                src={resumeImagePaths[modalCurrSlide]}
                alt="cv image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.showResumeButtonsWrapper}>
              <button
                className={styles.btnWrapper__left}
                onClick={() => {
                  if (modalCurrSlide > 0) {
                    setModalCurrSlide((prevState) => prevState - 1);
                  }
                }}
              >
                <i className={styles.arrow__left}></i>
              </button>

              <button
                className={styles.btnWrapper__right}
                onClick={() => {
                  if (modalCurrSlide < imageRefs.length - 1) {
                    setModalCurrSlide((prevState) => prevState + 1);
                  }
                }}
              >
                <i className={styles.arrow__right}></i>
              </button>
            </div>
          </MyModal>
        )}
      </AnimatePresence>

      <main className="container">
        <LeftSidebar />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className={`image-col ${styles.imageContainerCol}`}
        >
          <Image
            alt="main photo"
            objectFit="cover"
            layout="fill"
            src={imageRefs[currentSlide]}
            style={{ borderRadius: 5 }}
          />
          <div className={styles.mainTitleContainer}>
            <h1 className={styles.mainTitle}>hi there</h1>
          </div>
          <div className={styles.buttonsWrapper}>
            <button
              className={styles.btnWrapper__left}
              onClick={() => {
                if (currentSlide > 0) {
                  setCurrentSlide((prevState) => prevState - 1);
                }
              }}
            >
              <i className={styles.arrow__left}></i>
            </button>

            <button
              className={styles.btnWrapper__right}
              onClick={() => {
                if (currentSlide < imageRefs.length - 1) {
                  setCurrentSlide((prevState) => prevState + 1);
                }
              }}
            >
              <i className={styles.arrow__right}></i>
            </button>
          </div>
        </motion.div>
        <div></div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="content-col"
        >
          <div className="content-col__title-container">
            <span className="content-col__title droid-sans-bold">ABOUT ME</span>
          </div>
          <p className="content-col__subtitle inconsolata-bold">
            Im a frontend and React Native developer who enjoys creating cool
            things
          </p>
          <p className="content-col__text inconsolata-normal">
            Proficient in JavaScript, TypeScript, React, CSS, Expo, and more
            other web and mobile related tools.
          </p>

          <div className="content-col__title-container">
            <span className="content-col__title droid-sans-bold">
              SKILLS & SERVICES:{" "}
            </span>
          </div>
          <div className={styles.skillsContainer}>
            <span className={styles.skillsItem}>#JAVASCRIPT</span>
            <span className={styles.skillsItem}>#TYPESCRIPT</span>
            <span className={styles.skillsItem}>#REACT</span>
            <span className={styles.skillsItem}>#CSS</span>
            <span className={styles.skillsItem}>#NODE.JS</span>
            <span className={styles.skillsItem}>#NEXT.JS</span>
          </div>
          <div className={styles.viewExperience}>
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 1 }}
              className={styles.columnContent}
              onClick={() => {
                setShowModal(true);
              }}
            >
              <span className="droid-sans-bold">Resume</span>

              <div className={styles.iconArrowContainer}>
                <div className={styles.arrowLeft}></div>
                <div className={styles.iconArrow}></div>
              </div>
            </motion.button>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "30px",
            }}
          >
            <AnimatePresence>
              {!isFooterOpen && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.btnWrapper__up}
                  onClick={() => {
                    openFooter();
                  }}
                >
                  <i className={styles.arrow__up}></i>
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <div></div>
      </main>
    </>
  );
}
