import React, { FC } from 'react';
import styles from './NavTriggerMob.module.scss';
import Link from 'next/link';

interface INavTriggerMob {
  title: string;
  href: string;
}

export const NavTriggerMob: FC<INavTriggerMob> = ({ href, title }) => {
  return (
    <Link href={href} className={styles.root}>
      {title}
    </Link>
  );
};
