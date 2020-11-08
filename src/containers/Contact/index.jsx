import React from "react";
import { motion } from "framer-motion";

export default function Contact() {

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
    };
    
    const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
    };
    
    const pageStyle = {
    position: "absolute"
    };
    
  return (
    <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
  >
      <h1>This is Contact Page!</h1>
    </motion.div>
  );
}