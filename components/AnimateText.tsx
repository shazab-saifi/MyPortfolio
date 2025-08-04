import { motion } from "motion/react";

const AnimateText = ({
  delay,
  text,
  className,
}: {
  delay?: number;
  text: string;
  className: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: delay }}
      viewport={{ once: true }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default AnimateText;
