import { motion } from "framer-motion";
import "./hero.scss";

const listVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Set the stagger duration here
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const imageVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <motion.div className="hero-component">
      <motion.div
        className="hero-intro"
        initial="hidden"
        animate="visible"
        variants={listVariant}
      >
        <motion.h1 variants={itemVariant}>
          {"Synergy ERP Solution: Connecting Every Aspect of Your Business"}
        </motion.h1>
        <motion.p variants={itemVariant}>
          {
            "Enhance operational efficiency and make better decisions with our ERP system. All your business functions, from accounting to supply chain management, are connected in a single centralized platform."
          }
        </motion.p>
        <motion.div className="try-btn" variants={itemVariant}>
          Try Now for Free
        </motion.div>
      </motion.div>
      <motion.div className="hero-image" initial="hidden" animate="visible">
        <motion.img src="./hero.png" alt="hero-image" variants={imageVariant} />
      </motion.div>
    </motion.div>
  );
}
