import Image from 'next/image';
import React from 'react';
import styles from './NextButton.module.scss';

export const NextButton = () => {
  return (
    <a href='#clientsSection' className={styles.root}>
      <Image src={'/images/slider/btn-gonext.png'} width={20} height={20} alt='btnGoNext' />
    </a>
  );
};
