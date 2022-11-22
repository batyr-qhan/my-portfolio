import React, { useContext, useEffect, useState } from "react";
import classes from "./footer.module.scss";

import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../../store/app-context";

export default function Footer() {
  const appCtx = useContext(AppContext);

  const { isFooterOpen, openFooter, closeFooter } = appCtx;

  useEffect(() => {
    const timer = setTimeout(() => {
      openFooter();
    }, 2700);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isFooterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 50 }}
          // transition={{
          //   delay: 2.7,
          // }}
          exit={{
            opacity: 0,
            height: 0,
            transition: {
              delay: 0,
            },
          }}
          className={classes.container}
        >
          <div className={classes.content}>
            <span>
              handcrafted with 🔥 in the soul by <strong>Batyrkhan</strong>
            </span>
            <a onClick={closeFooter} className={classes.close}></a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
