"use client"

import styles from "./page.module.css"
import { AnimatePresence, motion, Variants } from "framer-motion";

export default function Description () {

  const animationVariants: Variants = {
    visible_card: {
      opacity: 1,
      y: 0
    },
    hidden_card: {
      opacity: 0,
      y: 50,
    },
    visible_img: {
      opacity: 1
    },
    hidden_img: {
      opacity: 0
    }
  };

  return (
    <section className={styles.description}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.description_left}>
            <motion.div
              initial="hidden_card"
              whileInView="visible_card"
              variants={animationVariants}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div className={styles.description_top_title}>
                <header className={styles.description_top_title_wrapper}>
                  <h2 className={styles.description_top_title_h2}>A New Dimension</h2>
                  <p className={styles.description_top_title_p}>
                    NeonEdge brings your iPhone to life with vibrant gradients
                    and dark themes that make every interaction a visual
                    delight. Perfect for nighttime usage and battery savings.
                  </p>
                </header>
                <button className={styles.description_top_btn}>
                  <span>More Details</span>
                </button>
              </div>
            </motion.div>
            <motion.div
              initial="hidden_card"
              whileInView="visible_card"
              variants={animationVariants}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className={styles.description_bottom}>
                <span className={styles.description_bottom_span}>"Switching to NeonEdge transformed my phone's aesthetic -
                  it's like holding a piece of the future!" - Alex Q.</span>
                <div className={styles.description_bottom_feedback}>
                  <img src="https://files.umso.co/lib_wfKJyoksALKsfAWv/n2qivwn73qp5m1d5.png?w=50&amp;h=50&amp;fit=crop&amp;dpr=2" />
                  <div className={styles.description_bottom_feedback_span}>
                    <span>You Customer</span><span>UI Designer </span>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
            
            <div className={styles.description_right}>
            <motion.div
              initial="hidden_img"
              whileInView="visible_img"
              variants={animationVariants}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img src="https://files.umso.co/lib_NzBDnSGOloSegeaJ/4021522.jpeg" style={{display: "block", maxWidth: "100%"}}/>
            </motion.div>
            </div>
          </div>
        </div>
      </section>
  )
}