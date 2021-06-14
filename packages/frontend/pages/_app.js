import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import "../styles/globals.css";

import { Provider } from "react-redux";
import store, { persistor } from "@/utils/redux/store";

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
    <Provider store={store}>
      <Head>
        <title>{title} | SIMALAB</title>
        {/* Primary */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="title" content="SIMALAB" />
        <meta name="keywords" content="IPB,manajemen,laboratorium" />
        <meta name="language" content="Indonesia" />
        <meta name="author" content="Kelompok 4 PSBO" />
        <meta name="description" content="Belum ada" />
      </Head>
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
    </Provider>
  );
}

export default MyApp;
