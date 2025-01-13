'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './SwiperBlock.module.scss';
import './SwiperBlock.scss';
import { Swiper as SwiperType } from 'swiper';
import NextIcon from '@/assets/images/ui/arrow-right.png';
import PrevIcon from '@/assets/images/ui/arrow-left.png';
import Image from 'next/image';

const news = [
  {
    date: '03.05.2024',
    content: `На текущий момент на рынке обменников, работающих с рублем происходит бум трафика. 
Многие игроки сходят с дистанции или отходят от работы с рублем. \n
Из-за активной борьбы регулятора с нелегальными казино и букмекерами, под раздачу невольно попадают и обменные пункты, 
работающие по всем канонам KYC и AML, так как они используют те же платежные каналы что и нелегалы. \n
Мы продолжаем обслуживать клиентов в прежнем режиме, но временно вводим ужесточенные правила фильтрации и фрода 
для минимизации рисков вовлечения в мошеннические операции на фоне роста объемов.`,
  },
  {
    date: '30.05.2024',
    content: `Мы успешно адаптировались к возросшему объему пополнений и выплат, и начинаем снижать требования к плательщикам.
- Верификация клиента для приема платежей по-прежнему обязательна (карта или паспорт на фоне обмена).
- Отключена обязательная кратность 100 на платежи.
- Минимальная сумма пополнения снижена до 15 000.
- Минимальная сумма выплаты снижена до 15 000.
Ожидаем дальнейшего раскручивания гаек в течение всего лета! Благодарим за сотрудничество.`,
  },
  {
    date: '15.06.2024',
    content: `FireKassa исполнилось 4 года с момента старта разработки!
На текущий момент с нами сотрудничает более 60 обменных пунктов с bestchange.ru, 4 криптовалютные биржи и тысячи магазинов интернет-коммерции.
Мы продолжаем развиваться и привлекать новых клиентов, а также исследовать новые платежные методы и технологии по улучшению конверсии, чтобы предлагать их вам.`,
  },
  {
    date: '30.06.2024',
    content: `С 01.07.2024 на основании БИНа карты плательщика будут автоматически подбираться реквизиты для оплаты того же банка, карта которого у плательщика.
Мы выдаем реквизиты: Сбербанк, Тинькофф Банк, Альфа-Банк, Райффайзен Банк и Газпромбанк.`,
  },
  {
    date: '10.07.2024',
    content: `Напоминаем, что для работы с пополнением рубля обязательным является верификация карты плательщика.\n
<strong>Пластиковая карта именная (одно из двух):</strong>
- Фото карты на фоне обменника.
- Селфи с картой и запиской в руке с URL обменника.
<strong>Пластиковая карта неименная (одно из двух):</strong>
- Фото карты и паспорта на фоне обменника.
- Селфи с картой, паспортом и запиской с URL обменника.
<strong>Виртуальная карта:</strong>
- Селфи с устройством с открытой картой, паспортом и запиской с URL обменника.

При пополнениях обязательна передача фамилии и имени в полях ext_last_name, ext_first_name. Данные должны совпадать с картой или паспортом.
В случае несоответствия транзакция будет заморожена до верификации.`,
  },
];

export const SwiperNews = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          className='newsSwiper'
        >
          {news.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: item.content.replace(/\n/g, '<br />'),
                }}
              />
              <div className={styles.date}>{item.date}</div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.buttonContainer}>
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <Image src={PrevIcon} alt='' />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <Image src={NextIcon} alt='' />
          </button>
        </div>
      </div>
    </div>
  );
};
