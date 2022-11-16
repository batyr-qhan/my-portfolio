import "../styles/globals.css";
import Layout from "../components/layout/layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}

export default MyApp;
