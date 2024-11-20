import React from 'react';
import styles from './OurTeam.module.scss';
import Image from 'next/image';
import { CardOurTeam } from '@/components/CardOurTeam/CardOurTeam';
import { Online } from '@/components/Online/Online';

const DATA = [
  {
    name: 'Кнут Алексей',
    image: '/images/our-team/knut.png',
    width: 228,
    height: 255,
    description: 'Технический директор fkassa и знаток латинской америки',
  },
  {
    name: 'Наталья',
    image: '/images/our-team/natal.png',
    width: 222,
    height: 265,
    description: 'QA. Ловец багов и уязвимостей',
  },
  {
    name: 'Бобылев Вячеслав',
    image: '/images/our-team/vysch.png',
    width: 239,
    height: 245,
    description: 'Head of sales. Master of sales.',
  },
  {
    name: 'Хаустов Владимир',
    image: '/images/our-team/vladimir.png',
    width: 246,
    height: 262,
    description: 'Технический директор sbercore. Главный по back-edn p2p',
  },
  {
    name: 'Мария Белова',
    image: '/images/our-team/mariya.png',
    width: 210,
    height: 255,
    description: 'Product manager, следит за сроками и нервами клиентов.',
  },
  {
    name: 'Акмал Камалов',
    image: '/images/our-team/akmal.png',
    width: 212,
    height: 258,
    description: ' Инженер по автоматизации. Ветеран Dotnet',
  },
];

const SOCIALS = [
  {
    name: 'whatsapp',
    href: '#',
    src: '/images/contacts/whatsapp.png',
  },
  {
    name: 'telegram',
    href: '#',
    src: '/images/contacts/telegram.png',
  },
  {
    name: 'email',
    href: '#',
    src: '/images/contacts/email.png',
  },
  {
    name: 'vk',
    href: '#',
    src: '/images/contacts/vk.png',
  },
];

export default function OurTeam() {
  return (
    <section id='#ourTeam' className={styles.ourTeam}>
      <h2 className={styles.title}>
        НАША КОМАНДА
        <Image
          src={'/images/our-team/orange_light_line.png'}
          alt='line'
          width={249}
          height={19}
          className={styles.line}
        />
      </h2>
      <div className={styles.content}>
        {DATA.map((card, index) => {
          return (
            <CardOurTeam
              key={index}
              image={card.image}
              name={card.name}
              description={card.description}
              width={card.width}
              height={card.height}
            />
          );
        })}
      </div>
      <p className={styles.info}>
        Самое важное для нашей компании - это люди, которые создают уникальный сервис, работают над
        новыми инструментами, взаимодействуют с клиентами, постоянно обеспечивают техническую
        поддержку и бесперебойную работу. Специалисты Firekassa управляют, руководят, консультируют
        и творят, вкладывая в проект свой многолетний опыт.
        <br />
        <br />
        Наша команда - это it разработка, отдел QA тестирования, отдел продаж, поддержка по
        транзакциям, диспутам, верификациям, поддержка партнерских шлюзов, отдел операторов для
        ручного процессинга и контроля транзакций - все вместе мы основа нынешних и будущих
        достижений Firekassa.
      </p>
      <div className={styles.contacts}>
        <div className={styles.socials}>
          <div className={styles.item_one}>
            <div className={styles.name}>Наши контакты:</div>
            <div className={styles.icons}>
              {SOCIALS.map((icon, index) => {
                return (
                  <a key={index} href={icon.href} target='_blank'>
                    <Image src={icon.src} alt={icon.name} width={26} height={26} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.item_two}>
            <div className={styles.name}>Номер телефона:</div>
            <div className={styles.phone}>+7 996 342 7459</div>
          </div>
        </div>
        <Online />
      </div>
    </section>
  );
}
