import { TransparentHeader } from '@/layout/TransparentHeader/TransparentHeader';
import React from 'react';
import styles from './AffilietePage.module.scss';
import { Online } from '@/components/Online/Online';
import { SocialsBlock } from '@/components/SocialsBlock/SocialsBlock';
import Image from 'next/image';

export const AffilietePage = () => {
  return (
    <div className='container'>
      <TransparentHeader />
      <main className={styles.root}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            ПРОГРАММА ПО ПРИВЛЕЧЕНИЮ ФИНАНСОВЫХ ПРЕДСТАВИТЕЛЕЙ
            <Image
              src={'/images/about/orange_light_line.png'}
              alt='line'
              width={84}
              height={17}
              className={styles.line}
            />
          </h1>
          <Online className={styles.online} descriptionColor='black' />
        </div>
        <div className={styles.wrapper}>
          <p className={styles.short}>
            Мы, сеть официальных обменных пунктов, находимся в мониторинге bestchange.ru -
            предлагаем программу по привлечению к нам финансовых представителей (людей которые
            откроют и передадут нам в аренду банковские карты в сбере, тинькоффбанке. альфабанке).
          </p>

          <p className={styles.long}>
            Мы, сеть официальных обменных пунктов, находимся в мониторинге bestchange.ru -
            предлагаем программу по привлечению к нам финансовых представителей (людей которые
            откроют и передадут нам в аренду банковские карты в сбере, тинькоффбанке. альфабанке).
          </p>

          <p className={styles.short}>
            Мы работаем с гражданами следующих стран: Беларусь, ДНР, ЛНР, Харьков, Кыргызстан,
            Азербайджан, Армения.
          </p>
        </div>
        <SocialsBlock className={styles.socials} />
      </main>
    </div>
  );
};
