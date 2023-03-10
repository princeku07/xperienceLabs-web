'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
;
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 bg-blue m-[50px] rounded-[16px] border-[2px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
    <motion.div
    variants={slideIn('left','tween',0.2,1)}
    >
    <img src="/astronaut.webp"  alt="cover" className="w-700 lg:h-[285px]
          h-[110px] md:h-[200px] object-contain  z-10   absolute" />
    </motion.div>
  
    
      <div
        className="flex justify-center
items-center flex-col relative z-10"
      >
        <motion.h1 variants={textVariant(1.1)}
        className={styles.heroHeading} >
            We Build
        </motion.h1>
        <motion.div
        variants={textVariant(1.3)}
        className = "flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}> Experience</h1>
         
        </motion.div>
      </div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className = "relative w-full md:-mt-[20px]  -mt-[12px]"
      >
        <div className="absolute w-full h-[380px] lg:h-[700px]
         rounded-tl-[140px] z-[0] -top-[30px] "/>
         
          <img src="/plantes.webp" alt="cover" className="w-full sm:h-[600px]
          h-[350px] object-contain rounded-tl-[140px] z-10   relative" />   
                  
          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 ">
              <img src="/stamp.webp" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-fit " />
            </div>
          </a>


        

      </motion.div>
    </motion.div>
    {/* <div className="w-full  ">
<img src="/groundwebp"  alt="ground" />
    </div> */}
  </section>
);

export default Hero;
