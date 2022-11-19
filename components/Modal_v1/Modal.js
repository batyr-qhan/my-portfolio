import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const Modal = ({ show, onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <div className={classes.modalHeader}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>
        {title && <div className={classes.modalTitle}>{title}</div>}
        <div className={classes.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
