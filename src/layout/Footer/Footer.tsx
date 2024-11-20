import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={clsx(styles.footer, 'container')}>
      <div className={styles.wrapper}>
        <div className={styles.nav}></div>
        <div className={styles.info}>
          График работы:
          <br />
          Поддержка в telegram по платежам для
          <br />
          обменников, криптобирж, криптокошельков: 24/7
          <br />
          Поддержка в telegram по платежам e-commerce
          <br />
          проектов с 9:00 до 02:00 ежедневно
          <br />
          Звонки 10:00 до 20:00
        </div>
      </div>
    </footer>
  );
};
