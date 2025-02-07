import React, { AnchorHTMLAttributes, FC } from 'react';
import styles from './Online.module.scss';
import clsx from 'clsx';

interface IOnline extends AnchorHTMLAttributes<HTMLAnchorElement> {
  descriptionColor?: 'black' | 'gray';
}

export const Online: FC<IOnline> = ({ className, descriptionColor = 'gray', ...props }) => {
  return (
    <a
      href='https://t.me/VyachAntipov'
      target='_blank'
      className={clsx(styles.online, className)}
      {...props}
    >
      <span className={styles.text}>ON-LINE</span>
      <span className={clsx(styles.description, styles[descriptionColor])}>
        онлайн-консультация
      </span>
    </a>
  );
};
