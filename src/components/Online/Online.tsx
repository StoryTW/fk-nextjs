import React from 'react';
import styles from './Online.module.scss';

export const Online = () => {
  return (
    <a href='#' target='_blank' className={styles.online}>
      <span className={styles.text}>ON-LINE</span>
      <span className={styles.description}>онлайн-консультация</span>
    </a>
  );
};
