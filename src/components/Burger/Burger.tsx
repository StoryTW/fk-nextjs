'use client';
import React, { useState } from 'react';
import styles from './Burger.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { DATA_NAVBAR } from '@/layout/Header/Navbar/Navbar';
import { OnlineMobile } from '../OnlineMobile/OnlineMobile';
import { NavSelectorClick } from '../ui/NavSelectorClick/NavSelectorClick';

const variant = {
  show: {
    x: 0,
  },
  hide: {
    x: 480,
  },
};

export const Burger = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className={styles.root}>
      <button className={styles.trigger} type='button' tabIndex={-1} onClick={toggleMenu}>
        <Image src={'/images/menu.png'} alt='menu' width={54} height={54} />
      </button>

      <AnimatePresence mode='wait'>
        {openMenu && (
          <motion.div
            variants={variant}
            initial={'hide'}
            animate={'show'}
            exit={'hide'}
            className={styles.content}
            transition={{
              duration: 0.3,
              bounce: false,
            }}
          >
            <div className={styles.contentWrapper}>
              <div className={styles.online}>
                <OnlineMobile />
              </div>
              <NavSelectorClick
                title={DATA_NAVBAR.about.title}
                options={DATA_NAVBAR.about.options}
              />
              <NavSelectorClick
                title={DATA_NAVBAR.about.title}
                options={DATA_NAVBAR.about.options}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
