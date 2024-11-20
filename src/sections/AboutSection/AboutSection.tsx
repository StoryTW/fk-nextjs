import React from 'react';
import styles from './AboutSection.module.scss';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='#about' className={styles.aboutUs}>
      <h2 className={styles.title}>О НАС</h2>
      <div className={styles.content}>
        <Image
          src={'/images/about/about-img.png'}
          alt='img'
          width={323}
          height={556}
          className={styles.img}
        />
        <div></div>
      </div>
    </section>
  );
}
