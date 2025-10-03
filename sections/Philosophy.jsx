'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Features2 from'../components/Feature2';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components/CustomTexts';

const Philosophy = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings} `} id="section-philosophy">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Die Philosophie" textStyles="text-center" />
        <Features2/>
      </motion.div>
    </section>
  );
};

export default Philosophy;
