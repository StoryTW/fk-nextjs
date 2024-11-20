import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const DATA = [
  {
    href: '#',
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
    href: '#',
    name: 'Гарантии',
  },
  {
    href: '#',
    name: 'Описание KYC',
  },
  {
    href: '#',
    name: 'Сми о нас',
  },
  {
    href: '#',
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
                  <a href={item.href} target='_blank'>
                    {item.name}
                  </a>
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
