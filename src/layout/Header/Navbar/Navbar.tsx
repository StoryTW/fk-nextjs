import React from 'react';
import styles from './Navbar.module.scss';
import { NavSelector } from '@/components/ui/NavSelector/NavSelector';
import { TriggerLink } from './TriggerLink/TriggerLink';
import { ROUTER } from '@/utils/router';

const DATA = {
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
    href: '/',
  },
  api: {
    name: 'API',
    href: '/',
  },
  integration: {
    title: 'ИНТЕГРАЦИЯ',
    options: [
      {
        name: 'Инструкции по API',
        href: '/',
      },
      {
        name: 'Инструкции по панели управления',
        href: '/',
      },
      {
        name: 'Гарантии',
        href: ROUTER.GUARANTEES,
      },
      {
        name: 'Заявки на подключение',
        href: '/',
      },
      {
        name: 'Соглашение о приеме платежей',
        href: '/',
      },
      {
        name: 'Правила работы сервиса',
        href: '/',
      },
      {
        name: 'Политика AML',
        href: '/',
      },
      {
        name: 'Политика KYC',
        href: '/',
      },
    ],
  },
  about: {
    title: 'О НАС',
    options: [
      {
        name: 'API',
        href: '/',
      },
      {
        name: 'ЖИЗНЬ ПРОЕКТА',
        href: '/',
      },
      {
        name: 'НОВОСТИ ПРОЕКТА',
        href: '/',
      },
      {
        name: 'КОНТАКТЫ',
        href: '/',
      },
    ],
  },
};

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <TriggerLink title={DATA.main.name} href={DATA.main.href} />
        </li>
        <li>
          <TriggerLink title={DATA.stavka.name} href={DATA.stavka.href} />
        </li>
        <li>
          <TriggerLink title={DATA.parners.name} href={DATA.parners.href} />
        </li>
        <li>
          <TriggerLink title={DATA.api.name} href={DATA.api.href} />
        </li>
        <li>
          <NavSelector title={DATA.integration.title} options={DATA.integration.options} />
        </li>
        <li>
          <NavSelector title={DATA.about.title} options={DATA.about.options} />
        </li>
      </ul>
    </nav>
  );
};
