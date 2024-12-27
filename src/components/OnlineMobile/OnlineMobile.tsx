import React from 'react';
import styles from './OnlineMobile.module.scss';
import Image from 'next/image';

export const OnlineMobile = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.title}>ON-LINE</div>
        <div className={styles.desc}>консультация</div>
      </div>
      <div className={styles.img}>
        <Image src={'/images/online3.png'} alt='img' width={96} height={96} />
      </div>
    </div>
  );
};
