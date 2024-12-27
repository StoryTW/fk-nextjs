'use client';
import React, { useState } from 'react';
import styles from './Burger.module.scss';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { DATA_NAVBAR } from '@/layout/Header/Navbar/Navbar';
import { OnlineMobile } from '../OnlineMobile/OnlineMobile';
import { NavSelectorClick } from '../ui/NavSelectorClick/NavSelectorClick';
import { RemoveScroll } from 'react-remove-scroll';
import { NavTriggerMob } from '../ui/NavTriggerMob/NavTriggerMob';

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
        <Image src={'/images/menu.png'} alt='menu' width={54} height={54} className={styles.img} />
      </button>

      <AnimatePresence mode='wait'>
        {openMenu && (
          <RemoveScroll>
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
              <ul className={styles.contentWrapper}>
                <li className={styles.online}>
                  <OnlineMobile />
                </li>
                <li className={styles.item}>
                  <NavTriggerMob title={DATA_NAVBAR.main.name} href={DATA_NAVBAR.main.href} />
                </li>
                <li className={styles.item}>
                  <NavTriggerMob title={DATA_NAVBAR.stavka.name} href={DATA_NAVBAR.stavka.href} />
                </li>
                <li className={styles.item}>
                  <NavTriggerMob title={DATA_NAVBAR.parners.name} href={DATA_NAVBAR.parners.href} />
                </li>
                <li className={styles.item}>
                  <NavTriggerMob title={DATA_NAVBAR.api.name} href={DATA_NAVBAR.api.href} />
                </li>
                <li className={styles.item}>
                  <NavSelectorClick
                    title={DATA_NAVBAR.integration.title}
                    options={DATA_NAVBAR.integration.options}
                  />
                </li>
                <li className={styles.item}>
                  <NavSelectorClick
                    title={DATA_NAVBAR.about.title}
                    options={DATA_NAVBAR.about.options}
                  />
                </li>
              </ul>
            </motion.div>
          </RemoveScroll>
        )}
      </AnimatePresence>
    </div>
  );
};
