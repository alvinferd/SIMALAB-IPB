import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";

const Noop = ({ children }) => children;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : Noop;
  const title = Component.title ? Component.title : "Website";
  const animationVariants = {
    pageInitial: {
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,
    },
  };

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          layout
          initial="pageInitial"
          animate="pageAnimate"
          variants={animationVariants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
