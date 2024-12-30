'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import styles from './SwiperBlock.module.scss';
import './SwiperBlock.scss';
import { Online } from '@/components/Online/Online';

const slides = [
  {
    img: '/images/slider/slide.png',
    title: 'ВЫПЛАТЫ:',
    list: [
      'Платежным агрегаторам / банкам / иным видам бизнеса – массовые выплаты клиентам, до 10,000 операций в минуту.',
    ],
    bottomText: {
      text: 'У нас имеются готовые cms модули и плагины для интеграции с',
      textSpan:
        'мегабот 2.0, сатошкин бот, скриптами обменных пунктов bestkurs, premium exchanger, eexchanger',
    },
  },
  {
    img: '/images/slider/slide2.png',
    title: 'ОБМЕННИКАМ:',
    list: [
      'Надежный эквайринг и массовые выплаты клиентам',
      'Возможность работы как с небольшими, так и с крупными проектами',
      'Анти-фрод от мошенничества',
      'безопасность средств и стабильность работы.',
    ],
    bottomText: {
      text: 'Мы подключаем обменные пункты с',
      textSpan: 'bestchange, kurs.expert, glazok',
    },
  },
  {
    img: '/images/slider/slide3.png',
    title: 'ТРЕЙДЕРАМ:',
    list: [
      'Возможность выйти на новый уровень и обороты при торговле на п2п биржах.',
      'Обратная совместимость со всеми популярными ботами и биржами.',
      'Возможность приема средств по номерам кошельков/банковских карт/договору/никнейму.',
    ],
    bottomText: {
      text: 'Мы подключаем трейдеров с ',
      textSpan: 'localbitcoins, bitzlato, paxful, binance, localcryptos',
    },
  },
];

export const SwiperBlock = () => {
  return (
    <div className={styles.root}>
      <Online className={styles.online} descriptionColor='black' />
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        loop={true}
        className='mySwiper'
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className={styles.slide}>
            <Image src={slide.img} width={561} height={463} alt='slide' className={styles.img} />
            <div className={styles.right}>
              <div>
                <div className={styles.header}>
                  <span>{slide.title}</span>
                </div>
                <div className={styles.listBlock}>
                  <ul className={styles.listUl}>
                    {slide.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.bottom}>
                {slide.bottomText.text}
                <span>{slide.bottomText.textSpan}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
