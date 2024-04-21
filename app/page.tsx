"use client"
import {AnimatePresence, motion} from 'framer-motion'

export default function BGImage () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
        <div className="image"></div>
    </motion.div>
  )
}
