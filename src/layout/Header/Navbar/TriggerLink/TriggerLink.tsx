import React, { FC } from 'react';
import styles from './TriggerLink.module.scss';
import Link from 'next/link';

interface ITriggerLink {
  title: string;
  href: string;
}

export const TriggerLink: FC<ITriggerLink> = ({ href, title }) => {
  return (
    <Link href={href} className={styles.root}>
      {title}
    </Link>
  );
};
