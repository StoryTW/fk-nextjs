'use client';
import React, { FC, useRef } from 'react';
import styles from './NavSelector.module.scss';
import { useHover } from '@/hooks/useHover';
import Link from 'next/link';
import IconArrow from '@/assets/images/ui/icon-chevron-down.svg';

interface INavSelector {
  options: {
    href: string;
    name: string;
  }[];
  title: string;
}

export const NavSelector: FC<INavSelector> = ({ options, title }) => {
  const ref = useRef(null);
  const isHover = useHover(ref);

  return (
    <div ref={ref} className={styles.root}>
      <div className={styles.trigger}>
        <span>{title}</span>
        <IconArrow />
      </div>

      {isHover && (
        <div className={styles.content}>
          <div className={styles.wrapper}>
            {options.map((item, index) => {
              return (
                <Link key={index} href={item.href} className={styles.item}>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
