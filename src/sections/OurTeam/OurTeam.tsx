import React from 'react';
import styles from './OurTeam.module.scss';
import Image from 'next/image';
import { CardOurTeam } from '@/components/CardOurTeam/CardOurTeam';
import { Online } from '@/components/Online/Online';
import { DATA, SOCIALS } from './OurTeam.data';

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
      <div className={styles.ceo}>
        <CardOurTeam
          image={'/images/our-team/denis.png'}
          name={'Ребров Денис'}
          description={'CEO'}
          width={216}
          height={259}
        />
      </div>
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
