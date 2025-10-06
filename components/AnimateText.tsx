import { motion } from 'motion/react';

const AnimateText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return (
    <div className="inline-flex flex-wrap">
      {text.split(' ').map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: idx * 0.1 }}
          viewport={{ once: true }}
          className={className}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default AnimateText;
