import styles from "./contact-page.module.scss";

export default function ContactPage() {
  return (
    <div className="container">
      <div className={`image-col ${styles.imageContainerCol}`}>
        <div className={styles.mainTitleContainer}>
          <h1 className={styles.mainTitle}>contact</h1>
        </div>
      </div>
      <div></div>
      <div className="content-col">
        <div className="content-col__title-container">
          <span className="content-col__title droid-sans-bold">CONTACT ME</span>
        </div>
        <p className="content-col__text inconsolata-normal">
          Proficient in JavaScript, TypeScript, React, CSS, and more other web
          related tools. Quality work, flexible communication.
        </p>
        <div className={styles.sendEmailWrapper}>
          <span>send email</span>
          <span className={styles.arrow}></span>
          <span>zhbatyrkhan@gmail.com</span>
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
