import React from 'react';
import styles from './AboutSection.module.scss';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='#about' className={styles.aboutUs}>
      <h2 className={styles.title}>
        О НАС
        <Image
          src={'/images/about/orange_light_line.png'}
          alt='line'
          width={84}
          height={17}
          className={styles.line}
        />
      </h2>
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
