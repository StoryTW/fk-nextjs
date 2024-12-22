import { TransparentHeader } from '@/layout/TransparentHeader/TransparentHeader';
import React from 'react';
import styles from './ProjectNewsPage.module.scss';
import { Online } from '@/components/Online/Online';
import { SocialsBlock } from '@/components/SocialsBlock/SocialsBlock';

export const ProjectNewsPage = () => {
  return (
    <div className='container'>
      <TransparentHeader />
      <main className={styles.root}>
        <Online className={styles.online} descriptionColor='black' />
        <div className={styles.wrapper}>
          <p className={styles.text}>
            На текущий момент на рынке обменников, работающих с рублем происходит бум трафика.
            Многие игроки сходят с дистанции, или отходят от работы с рублем, <br />
            Из-за активной борьбы регулятора с нелегальными казино и букмекерами, под раздачу
            невольно попадают и обменные пункты, работающие по всем канонам KYC и AML, так как они
            используют те же платежные каналы что и нелегалы. <br /> Мы продолжаем обслуживать
            клиентов в прежнем режиме, но временно вводим ужесточенные правила фильтрации и фрода
            для минимизации рисков вовлечения в мошеннические операции на фоне роста обьемов.
          </p>
        </div>
        <SocialsBlock className={styles.socials} />
      </main>
    </div>
  );
};
