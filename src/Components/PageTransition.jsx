import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 12, scale: 0.995 },
  in: { opacity: 1, y: 0, scale: 1 },
  out: { opacity: 0, y: -12, scale: 0.995 },
};

export default function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={{ duration: 0.48, ease: [0.2, 0.9, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
