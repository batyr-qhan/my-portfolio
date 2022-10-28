import Link from "next/link";
import styles from "./work-page.module.scss";

export default function WorkPage() {
  return (
    <div className="container">
      <div className={`image-col ${styles.imageContainerCol}`}>
        <div className={styles.mainTitleContainer}>
          <h1 className={styles.mainTitle}>certificates project</h1>
        </div>
      </div>
      <div></div>
      <div className="content-col">
        <div className="content-col__title-container">
          <span className="content-col__title droid-sans-bold">
            PROJECT NAME
          </span>
        </div>
        <p className="content-col__subtitle inconsolata-bold">
          Certificates Project
        </p>
        <div className="content-col__title-container">
          <span className="content-col__title droid-sans-bold">
            DESCRIPTION
          </span>
        </div>
        <p className="content-col__text inconsolata-normal">
          The project allows users to create certifications for vehicles in
          order to pass through the hygiene examination. I`ve built the project
          from the scratch. The form is split into several parts and all data is
          gathered in React Context. The authentication is also done using React
          Context. The auth token is stored in asyncStorage on the device. On
          the last step of the form the user has to put the signature. It is
          implemented using react-canvas-signature package.
        </p>

        <div className="content-col__title-container">
          <span className="content-col__title droid-sans-bold">
            TOOLS USED:
          </span>
        </div>
        <div className={styles.skillsContainer}>
          <span className={styles.skillsItem}>#REACT NATIVE</span>
          <span className={styles.skillsItem}>#JAVASCRIPT</span>
          <span className={styles.skillsItem}>#CSS</span>
          <span className={styles.skillsItem}>#REACT CONTEXT API</span>
          <span className={styles.skillsItem}>#REACT NAVIGATION</span>
        </div>
        <div className={styles.viewExperience}>
          <span className={styles.viewExperience__text}>
            <button>View more images</button>
          </span>

          <div className={styles.iconArrowContainer}>
            <div className={styles.arrowLeft}></div>
            <div className={styles.iconArrow}></div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {/* experience-page */}
    </div>
  );
}
