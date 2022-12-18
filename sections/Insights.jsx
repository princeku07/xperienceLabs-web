'use client';
import { motion } from "framer-motion";
import {InsightCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { insights } from "../constants";
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <div
      // variants={staggerContainer}
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col`}
    >
      <TypingText title="| Insights " textStyles="text-center" />
      <TitleText title="Insights about Augmented Reality" 
      textStyle = "text-center"/>
      <div className="mt-[50px] flex flex-col gap-[30px]">
            {insights.map((insight,index)=>(
              <InsightCard key={`insight-${index}`}
              {...insight} index={index+1}/>
            ))}
      </div>
    </div>
</section>
);

export default Insights;
