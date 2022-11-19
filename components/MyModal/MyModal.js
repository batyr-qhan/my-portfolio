import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./myModal.module.scss";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const MyModal = ({ handleClose, children, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={classes.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={classes.modalHeader}>
          <a href="#" className={classes.close} onClick={handleClose} />
        </div>
        {/* {title && <div className={classes.modalTitle}>{title}</div>} */}
        <div className={classes.modalBody}>{children}</div>

        {/* <p>{text}</p> */}
        {/* <button onClick={handleClose}>Close</button> */}
      </motion.div>
    </Backdrop>
  );
};

export default MyModal;
