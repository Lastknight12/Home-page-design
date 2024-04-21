"use client";

import styles from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className={styles.main_left}>
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
