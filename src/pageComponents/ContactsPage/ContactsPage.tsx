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
              <br /> https://t.me/VyachAntipov
            </div>
            <div className={styles.item}>
              По вопросам pr и сотруднечеству <br />
              +7 996 342 7459 <br />
              https://t.me/VyachAntipov
            </div>
            <div className={styles.item}>
              Почтовий адрес:
              <br />
              @yandex/ru***
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.item}>@firekassa с 9:00 до 2:00 ежедневно</div>
            <div className={styles.item}>@sbercore @Mavi_support ежедневно с 0:00 до 9:00</div>
            <div className={styles.item}>email: support@firekassa.com</div>
          </div>
        </div>
        <SocialsBlock className={styles.socials} />
      </main>
    </div>
  );
};
