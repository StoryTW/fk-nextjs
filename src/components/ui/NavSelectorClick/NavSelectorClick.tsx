'use client';
import React, { FC, useState } from 'react';
import styles from './NavSelectorClick.module.scss';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';

interface INavSelectorClick {
  options: {
    href: string;
    name: string;
  }[];
  title: string;
}

const variants = {
  open: {
    height: 'auto',
  },
  close: {
    height: '0',
    overflow: 'hidden',
  },
};

export const NavSelectorClick: FC<INavSelectorClick> = ({ options, title }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <div className={styles.root}>
      <button className={styles.trigger} tabIndex={-1} onClick={toggle}>
        {title}
      </button>

      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            className={styles.content}
            variants={variants}
            initial={'close'}
            animate={'open'}
            exit={'close'}
            transition={{ duration: 0.3, bounce: false }}
          >
            <div className={styles.wrapper}>
              {options.map((item, index) => {
                return (
                  <Link key={index} href={item.href} className={styles.item}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
