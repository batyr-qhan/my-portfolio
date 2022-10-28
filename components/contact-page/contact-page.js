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

        <div className={styles.sendEmailWrapper}>
          <span className={`droid-sans-normal ${styles.leftText}`}>
            send email
          </span>
          <span className={styles.arrow}></span>
          <span className={`droid-sans-normal ${styles.rightText}`}>
            zhbatyrkhan@gmail.com
          </span>
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
