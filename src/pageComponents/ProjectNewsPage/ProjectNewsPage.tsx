import { TransparentHeader } from '@/layout/TransparentHeader/TransparentHeader';
import React from 'react';
import styles from './ProjectNewsPage.module.scss';
import { Online } from '@/components/Online/Online';
import { SocialsBlock } from '@/components/SocialsBlock/SocialsBlock';
import { SwiperNews } from '@/sections/SwiperNews/SwiperBlock';

export const ProjectNewsPage = () => {
  return (
    <div className='container'>
      <TransparentHeader />
      <main className={styles.root}>
        <Online className={styles.online} descriptionColor='black' />    
        <SwiperNews />
        <SocialsBlock className={styles.socials} />
      </main>
    </div>
  );
};
