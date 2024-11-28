import React, { FC } from 'react';
import styles from './PayoffCard.module.scss';

interface IPayoffCard {
  text: string;
  order: string;
}

export const PayoffCard: FC<IPayoffCard> = ({ text, order }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cirle}>{order}</div>
      <div className={styles.wrapper}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
