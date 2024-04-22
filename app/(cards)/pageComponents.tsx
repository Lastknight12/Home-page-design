"use client";

import styles from "./page.module.css";
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Cards() {

  const animationVariantsCards: Variants = {
    visible_title: {
      opacity: 1,
      y: 0
    },
    hidden_title: {
      opacity: 0,
      y: 50,
    },
    visible_card: {
      opacity: 1
    },
    hidden_card: {
      opacity: 0
    }
  };

  return (
    <section className={styles.cards}>
      <div className={styles.container}>
        <motion.div
          initial="hidden_title"
          whileInView={"visible_title"}
          variants={animationVariantsCards}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <header className={styles.cards_top}>
            <h2 className={styles.cards_top_h2}>Premium Features</h2>
            <p className={styles.cards_top_p}>
              Our outstanding features are crafted to provide an unmatched user
              experience, ensuring your iPhone stands out with its impressive
              neon gradient themes.
            </p>
          </header>
        </motion.div>
        <motion.div
          initial="hidden_card"
          whileInView="visible_card"
          variants={animationVariantsCards}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{once: true}}
        >
          <div className={styles.cards_bottom}>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"></path>
              </svg>
              <h3 className={styles.card_h3}>Easy Install</h3>
              <div className={styles.card_span}>
                With just a few taps, deploy your new neon gradient theme and
                completely transform your phone’s interface effortlessly.
              </div>
            </div>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path>
              </svg>
              <h3 className={styles.card_h3}>Custom Modes</h3>
              <div className={styles.card_span}>
                Choose from a wide range of dark themes or create personalized
                gradients to reflect your unique style and preferences.
              </div>
            </div>
            <div className={styles.card}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"></path>
              </svg>
              <h3 className={styles.card_h3}>Battery Life</h3>
              <div className={styles.card_span}>
                Enjoy extended battery life with optimized dark themes that
                reduce screen power consumption significantly.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}