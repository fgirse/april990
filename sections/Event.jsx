'use client';

import { motion } from 'framer-motion';
import Modale04 from '../components/Modale/Modale04';
import styles from '../styles';
import { startingFeatures} from'../constants/index'
import { TypingText } from '../components/CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

export default function Event () {
  return (
 <section id="section-events" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/Crowdparty.png"
          alt="event-party"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] text-yellow-400 flex justify-center flex-col"
      >
        <TypingText title="|Dein Event" />
        <h1 className='headingA text-yellow-500 text-[3rem]'>dein event</h1>
        <h1 className="text-[2rem]">privater oder geschäftlicher Event?</h1>
        <div className="mb-[5vw] mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-index">
                {index < 9 ? `0${index + 1}` : index + 1}
              </span>
              <span className="feature-text">{feature}</span>
            </div>
          ))}
        </div>
        <Modale04/>
      </motion.div>
    </motion.div>
      </section>
);

}
 

