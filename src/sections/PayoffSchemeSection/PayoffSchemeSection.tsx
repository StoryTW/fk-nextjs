import React from 'react';
import styles from './PayoffSchemeSection.module.scss';
import Image from 'next/image';
import { PayoffCard } from './PayoffCard/PayoffCard';

const DATA_1 = [
  {
    order: '1',
    text: 'Клиент желает совершить обмен со сторонней системы или криптовалюты на фиат (карта, кошелек). Он создает заявку-ордер у вас на сайте или через биржу.',
  },
  {
    order: '3',
    text: 'Клиент совершат оплату по вашим реквизитам',
  },
  {
    order: '5',
    text: 'Firekassa переводит денежные средства вашему клиенту и передает уведомление об успешной выплате.',
  },
];

const DATA_2 = [
  {
    order: '2',
    text: 'Вы выдаете клиенту реквизит для оплаты.',
  },
  {
    order: '4',
    text: 'Вы получаете от клиента карту или кошелек для выплаты и передаете в firekassa (через апи или интерфейс) в запросе на выплату.',
  },
];

export default function PayoffSchemeSection() {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        СХЕМА ВЫПЛАТ
        <Image
          src={'/images/about/orange_light_line.png'}
          alt='line'
          width={203}
          height={17}
          className={styles.line}
        />
      </h2>
      <div className={styles.content}>
        <div className={styles.one}>
          {DATA_1.map((card, index) => {
            return <PayoffCard key={index} {...card} />;
          })}
        </div>
        <div className={styles.two}>
          {DATA_2.map((card, index) => {
            return <PayoffCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
}
