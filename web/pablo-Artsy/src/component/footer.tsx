import { FaMobileAlt } from "react-icons/fa";
import Title from "./title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust as needed
  });

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.footer
      ref={ref}
      className="w-full bg-[#1C1C1C] text-white p-5"
      initial="hidden"
      animate={controls}
      variants={footerVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center">
        <motion.div variants={footerVariants}>
          <Title />
        </motion.div>
        <motion.h1 variants={footerVariants}>
          © 2022 Alchemy Code Lab • All Rights Reserved
        </motion.h1>
        <motion.div
          className="flex flex-col gap-2 text-sm"
          variants={footerVariants}
        >
          <h1>Pokhara</h1>
          <h1>Newroad, Pokhara</h1>
          <div className="flex gap-2 items-center">
            <FaMobileAlt color="whitesmoke" />
            <h1>Office: +977- 980-123-4567</h1>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
