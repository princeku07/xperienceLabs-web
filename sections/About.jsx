'use client';
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About XperienceLabs " textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        We integrate digital objects into real world as well as build fully imersive digital experience through VR headset, As of now we can use our smartphone for Agumented experiences as today's smartphones are much powerful. Use our app to create and place digital objects into real world locations and save it as landmark. You can share it with your friends and also make discoverable for everyone.
      </motion.p>
      <motion.img variants={fadeIn("up", "tween", 0.3, 1)} src="/arrow-down.svg" alt="arrow down "
      className="w-[18px] h-[28px] object-contain mt-[28px]">

      </motion.img>
    </motion.div>
 
  </section>
);

export default About;
