import React from 'react';
import styles from './Navbar.module.scss';

const DATA = [
  {
    name: 'ГЛАВНАЯ',
    href: '/',
  },
  {
    name: 'СТАВКА',
    href: '/',
  },
  {
    name: 'НАШИ ПАРТНЕРЫ',
    href: '#parthers',
  },
  {
    name: 'API',
    href: '#api',
  },
  {
    name: 'ИНТЕГРАЦИЯ',
    href: '#integration',
  },
  {
    name: 'О НАС',
    href: '#about',
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {DATA.map((item, index) => {
          return (
            <li key={index} className={styles.item}>{item.name}</li>
          )
        })}
      </ul>
    </nav>
  );
};
