import React from 'react';
import styles from './Navbar.module.scss';
import { NavSelector } from '@/components/ui/NavSelector/NavSelector';
import { TriggerLink } from './TriggerLink/TriggerLink';
import { ROUTER } from '@/utils/router';

export const DATA_NAVBAR = {
  main: {
    name: 'ГЛАВНАЯ',
    href: ROUTER.MAIN,
  },
  stavka: {
    name: 'СТАВКА',
    href: '/',
  },
  parners: {
    name: 'НАШИ ПАРТНЕРЫ',
    href: ROUTER.PARTNERS,
  },
  api: {
    name: 'API',
    href: ROUTER.API,
  },
  integration: {
    title: 'ИНТЕГРАЦИЯ',
    options: [
      // {
      //   name: 'Инструкции по API',
      //   href: '/',
      // },
      // {
      //   name: 'Инструкции по панели управления',
      //   href: '/',
      // },
      {
        name: 'Гарантии',
        href: ROUTER.GUARANTEES,
      },
      // {
      //   name: 'Заявки на подключение',
      //   href: '/',
      // },
      // {
      //   name: 'Соглашение о приеме платежей',
      //   href: '/',
      // },
      // {
      //   name: 'Правила работы сервиса',
      //   href: '/',
      // },
      // {
      //   name: 'Политика AML',
      //   href: '/',
      // },
      // {
      //   name: 'Политика KYC',
      //   href: '/',
      // },
    ],
  },
  about: {
    title: 'О НАС',
    options: [
      // {
      //   name: 'API',
      //   href: ROUTER.API,
      // },
      {
        name: 'ЖИЗНЬ ПРОЕКТА',
        href: ROUTER.PROJECT_LIFE,
      },
      {
        name: 'НОВОСТИ ПРОЕКТА',
        href: ROUTER.PROJECT_NEWS,
      },
      {
        name: 'КОНТАКТЫ',
        href: ROUTER.CONTACTS,
      },
    ],
  },
};

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <TriggerLink title={DATA_NAVBAR.main.name} href={DATA_NAVBAR.main.href} />
        </li>
        <li>
          <TriggerLink title={DATA_NAVBAR.stavka.name} href={DATA_NAVBAR.stavka.href} />
        </li>
        <li>
          <TriggerLink title={DATA_NAVBAR.parners.name} href={DATA_NAVBAR.parners.href} />
        </li>
        <li>
          <TriggerLink title={DATA_NAVBAR.api.name} href={DATA_NAVBAR.api.href} />
        </li>
        <li>
          <NavSelector title={DATA_NAVBAR.integration.title} options={DATA_NAVBAR.integration.options} />
        </li>
        <li>
          <NavSelector title={DATA_NAVBAR.about.title} options={DATA_NAVBAR.about.options} />
        </li>
      </ul>
    </nav>
  );
};
