import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { ROUTER } from '@/utils/router';

const DATA = [
  {
    href: ROUTER.CONTACTS,
    name: 'Обратная связь',
  },
  {
    href: '#',
    name: 'Безопасность',
  },
  {
    href: '#',
    name: 'Процедура AML',
  },
  {
    href: ROUTER.GUARANTEES,
    name: 'Гарантии',
  },
  {
    href: '#',
    name: 'Описание KYC',
  },
  {
    href: '#',
    name: 'СМИ о нас',
  },
  {
    href: ROUTER.API,
    name: 'Описание API',
  },
];

export const Footer = () => {
  return (
    <footer className={clsx(styles.footer, 'container')}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <ul className={styles.list}>
            {DATA.map((item, index) => {
              return (
                <li key={index} className={styles.item}>
                  <Link href={item.href} target='_blank'>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
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
