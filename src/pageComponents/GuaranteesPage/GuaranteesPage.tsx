import { TransparentHeader } from '@/layout/TransparentHeader/TransparentHeader';
import React from 'react';
import styles from './GuaranteesPage.module.scss';
import { Online } from '@/components/Online/Online';

export const GuaranteesPage = () => {
  return (
    <div className='container'>
      <div className={styles.root}>
        <TransparentHeader />
        <main>
          <Online className={styles.online} descriptionColor='black' />
        </main>
      </div>
    </div>
  );
};
