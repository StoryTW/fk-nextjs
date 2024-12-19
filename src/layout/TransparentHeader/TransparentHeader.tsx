import React from 'react';
import styles from './TransparentHeader.module.scss';
import { NavigationPanel } from '../Header/NavigationPanel/NavigationPanel';

export const TransparentHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavigationPanel />
      </div>
    </header>
  );
};
