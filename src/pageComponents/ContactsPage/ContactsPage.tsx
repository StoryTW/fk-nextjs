import { TransparentHeader } from '@/layout/TransparentHeader/TransparentHeader';
import React from 'react';
import styles from './ContactsPage.module.scss';
import { Online } from '@/components/Online/Online';
import { SocialsBlock } from '@/components/SocialsBlock/SocialsBlock';

export const ContactsPage = () => {
  return (
    <div className='container'>
      <TransparentHeader />
      <main className={styles.root}>
        <Online className={styles.online} descriptionColor='black' />
        <div className={styles.wrapper}>
          <div className={styles.list}>
            <div className={styles.item}>
              Интернет проектам: <br />
              +7 996 342 7459
              <br /> t.me/VyachAntipov
              <br /> С 9:00 до 19:00 ежедневно
            </div>
            <div className={styles.item}>
              По вопросам pr и сотруднечеству <br />
              +7 996 342 7459 <br />
              t.me/VyachAntipov
              <br />С 9:00 до 19:00 ежедневно
            </div>
            <div className={styles.item}>
              Почтовый адрес:
              <br />
              sales@firekassa.com
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>
              Техническая поддержка: <br />
              support@firekassa.com <br /> t.me/firekassa <br /> с 9:00 до 2:00 ежедневно
            </div>
            <div className={styles.item}>
              {' '}
              Ночная поддержка обменников: <br />
              t.me/sbercore
              <br />
              t.me/Mavi_support
              <br />
              ежедневно с 0:00 до 9:00
            </div>
          </div>
        </div>
        <SocialsBlock className={styles.socials} />
      </main>
    </div>
  );
};
