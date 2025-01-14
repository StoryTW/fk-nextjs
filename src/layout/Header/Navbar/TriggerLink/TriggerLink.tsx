import React, { FC } from 'react';
import styles from './TriggerLink.module.scss';
import Link from 'next/link';

interface ITriggerLink {
  title: string;
  href: string;
  blank?: boolean;
}

export const TriggerLink: FC<ITriggerLink> = ({ href, title, blank = false }) => {
  if (blank) {
    return (
      <Link href={href} className={styles.root} target='_blank'>
        {title}
      </Link>
    );
  }

  return (
    <Link href={href} className={styles.root}>
      {title}
    </Link>
  );
};
