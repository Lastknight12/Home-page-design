"use client";

import styles from "./page.module.css";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Main() {
  const PathVariants: Variants = {
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        delay: 0.4
      },
    },
    hidden: {
      pathLength: 0,
    },
  };

  const SvgVariants: Variants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.4
      }
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.main_wrapper}>
            <motion.div
              className={styles.main_left}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className={styles.main_left_wrapper}>
                <header className={styles.main_title_wrapper}>
                  <h1 className={styles.main_title_h1}>
                    Discover the future with our Dark{" "}
                    <span className={styles.span_text_gradient}>
                      {" "}
                      Theme designs
                    </span>
                  </h1>
                  <p className={styles.main_title_p}>
                    crafted to elevate your new iPhone's interface. Immerse
                    yourself in a sleek, futuristic look tailored for the
                    tech-savvy user.
                  </p>
                </header>
                <div className={styles.btn_group}>
                  <button className={styles.btn_explore}>
                    <span>Explore Designs</span>
                  </button>
                  <button className={styles.btn_subscribe}>
                    <span>Subscribe Now </span>
                  </button>
                </div>
              </div>
            </motion.div>
            <div className={styles.main_right}>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="400px"
                height="400px"
                viewBox="0 0 30 30"
                fill="none"
                variants={SvgVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M 8.2832031,5.453125 5.453125,8.2832031 6.515625,9.34375 7.9296875,7.9296875 8.6367188,8.6367188 7.2226562,10.050781 l 1.4140626,1.414063 1.4140622,-1.414063 0.707031,0.707031 -1.414062,1.414063 1.414062,1.414063 2.828126,-2.828126 z M 21.283203,5.8886719 18.617188,8.5546875 21.445312,11.382812 24.111328,8.7167969 C 23.72822,8.1781369 23.307331,7.6589012 22.824219,7.1757812 22.341109,6.6926712 21.821837,6.2718019 21.283203,5.8886719 Z M 17.203125,9.96875 6.5957031,20.576172 5.8886719,24.111328 9.4238281,23.404297 20.03125,12.796875 Z m 2.039063,6.445312 -2.828126,2.828126 1.414063,1.414062 1.414063,-1.414062 0.707031,0.707031 -1.414063,1.414062 1.414063,1.414063 1.414062,-1.414063 0.707031,0.707031 -1.414062,1.414063 1.060547,1.0625 2.830078,-2.830078 z"
                  variants={PathVariants}
                  initial="hidden"
                  animate="visible"
                  style={{stroke: "#fff"}}
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
