import SocialIcons from "../../ui/SocialIcons";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="mt-32 flex flex-col items-center justify-center gap-3 pb-10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-0.5 w-full bg-gray-800/60"
      />
      <motion.article
        initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
        whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn" }}
        className="mt-5 flex items-center gap-3"
      >
        <SocialIcons />
      </motion.article>
      <motion.article
        initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
        whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn" }}
      >
        <p className="text-sm tracking-wide text-white/50">
          © 2026 <span className="text-green">ABBAS BAYAT</span>. All rights
          reserved.
        </p>
      </motion.article>
    </footer>
  );
};

export default Footer;
