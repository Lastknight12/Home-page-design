"use client"

import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <motion.div 
            className={styles.main}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <nav className={styles.nav_wrapper}>
              <div className={styles.nav_children}>
                <div className={styles.logo}>
                  <a className={styles.logo_link}>
                    <div className={styles.logo_wrapper}>
                      <img
                        src="https://files.umso.co/lib_SUQilvCDrDwywovw/ejidz469qf05wyna.svg"
                        className={styles.logo_image}
                      />
                    </div>
                    <span className={styles.logo_text}>NeonEdge</span>
                  </a>
                </div>
              </div>
              <ul className={styles.nav_links}>
                <li>
                  <a className={styles.nav_links_a}>Features</a>
                </li>
                <li>
                  <a className={styles.nav_links_a}>Pricing</a>
                </li>
                <li>
                  <a className={styles.nav_links_a}>Contact</a>
                </li>
              </ul>
              <div className={styles.nav_buttons}>
                <button
                  className={`${styles.nav_button_login} ${styles.btn_auth}`}
                >
                  <span>Sign Up</span>
                </button>
                <button
                  className={`${styles.nav_button_signup} ${styles.btn_auth}`}
                >
                  <span>Login </span>
                </button>
              </div>
            </nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
}