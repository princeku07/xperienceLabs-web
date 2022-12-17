'use client';
import { motion } from "framer-motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { newFeatures } from "../constants";
const WhatsNew = () => (
  <section className={`  ${styles.paddings} lg:${styles.flexCenter} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth}mx-auto flex lg:flex-row flex-col gap-8`}
    >
      
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flext justify-center flex-col"
      >
        <TypingText title="| Latest" />
        <TitleText title={<>What's latest developments in AR?</>} />
        <div className="mt-[48px] flex flex-wrap justify-center gap-[24px]">
           {newFeatures.map((feature) => (
            <NewFeatures
            key={feature.title}
            {...feature}/>
          ))} 
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
