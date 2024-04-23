"use client";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Description from "./components/description/PageComponent";
import Cards from "./components/cards/Card";

export default function BGImage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="image"></div>
      </motion.div>
      <Home />
      <Main />
      <Description />
      <Cards />
      <div
        style={{
          margin: "30px 30px 30px 0",
          textAlign: "end",
          fontSize: "1.5em",
          color: "#fff",
        }}
      >
        Site developed by Last
      </div>
    </>
  );
}
