'use client';

import React, { useState } from 'react';
import styles from './ConditionSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedSVG = ({ hoveredIndex }: { hoveredIndex: number | null }) => {
  const circles = [
    { radius: 105, initialFill: 0.4 },
    { radius: 85, initialFill: 0.6 },
    { radius: 65, initialFill: 0.7 },
    { radius: 45, initialFill: 0.75 },
    { radius: 25, initialFill: 0.8 },
    { radius: 10, initialFill: 0.8 },
  ];

  const getCircumference = (radius: number) => 2 * Math.PI * radius;

  return (
    <motion.svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220' width='220' height='220'>
      <defs>
        <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
          <stop offset='0%' stopColor='#A88360' />
          <stop offset='100%' stopColor='#F5831A' />
        </linearGradient>
      </defs>
      {circles.map((circle, index) => {
        const circumference = getCircumference(circle.radius);
        const initialOffset = circumference * (1 - circle.initialFill);
        return (
          <g key={index}>
            <circle cx='110' cy='110' r={circle.radius} fill='none' stroke='none' strokeWidth='8' />
            <motion.circle
              cx='110'
              cy='110'
              r={circle.radius}
              fill='none'
              stroke='url(#gradient)'
              strokeWidth='8'
              strokeDasharray={circumference}
              strokeDashoffset={hoveredIndex === index ? 0 : initialOffset}
              strokeLinecap='round'
              animate={{
                strokeDashoffset: hoveredIndex === index ? 0 : initialOffset,
              }}
              initial={false}
              transition={{
                duration: 1.8,
                ease: 'easeInOut',
              }}
              style={{
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
              }}
            />
          </g>
        );
      })}
    </motion.svg>
  );
};

export default function ConditionSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: '/images/condition/methods/sber.svg', width: 126, height: 50 },
    { src: '/images/condition/methods/tinkoff.svg', width: 106, height: 50 },
    { src: '/images/condition/methods/rayf.svg', width: 117, height: 50 },
    { src: '/images/condition/methods/gaz.svg', width: 88, height: 50 },
    { src: '/images/condition/methods/alfa.svg', width: 142, height: 50 },
    { src: '/images/condition/methods/qmoney.svg', width: 91, height: 50 },
    { src: '/images/condition/methods/union.svg', width: 99, height: 50 },
    { src: '/images/condition/methods/tele2.svg', width: 66, height: 50 },
    { src: '/images/condition/methods/bilayn.svg', width: 76, height: 50 },
    { src: '/images/condition/methods/megafon.svg', width: 94, height: 50 },
    { src: '/images/condition/methods/yota.svg', width: 52, height: 50 },
    { src: '/images/condition/methods/steam.svg', width: 87, height: 50 },
  ];
  return (
    <section className={styles.condition}>
      <h2 className={styles.title}>
        УСЛОВИЯ
        <Image
          src={'/images/about/orange_light_line.png'}
          alt='line'
          width={200}
          height={19}
          className={styles.line}
        />
      </h2>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.text}>
            <div className={styles.textItem}>
              <Image src='/images/project-life-page/light.png' width={20} height={25} alt='light' />
              <p>
                При добавлении своего сайта / профиля на бирже на модерацию в firekassa от Вас
                потребуется указать источники трафика на пополнение и на вывод, описать историю
                вашей деятельности, какие проекты есть или были, на каких ресурсах имеется репутация
                и какого она качества.
              </p>
            </div>
            <div className={styles.textItem}>
              <Image src='/images/project-life-page/light.png' width={20} height={25} alt='light' />
              <p>
                Мы принимаем клиентов только определенного уровня силы. С однодневками или
                новобранцами предпочитаем отказываться работать. Строгость критерия отбора клиентов
                зависит от необходимости у нас и наличии свободных мест. Но в целом критерии для
                успешной модерации имеются следующие: - обменники: листинг в мониторинге бестчендж
                или глазок/курс.эксперт и множество отзывов или топики на
                ммгп/биткоин.талк/серчэнджинс и других форумах с позитивной репутацией, возраст
                минимум от 1 года.
              </p>
            </div>
            <div className={styles.textItem}>
              <Image src='/images/project-life-page/light.png' width={20} height={25} alt='light' />
              <div>
                <p>Или по рекомендациям существующих клиентов.</p>
                <p>
                  - трейдеры: наличие от 10,000+ сделок или клиенты мегабот 2.0/сатошкин бот или по
                  рекомендации существующих клиентов.
                </p>
                <p>- банки: после индивидуального согласования (только массовые выплаты)</p>
                <p>- платежные агрегаторы: после индивидуального согласования</p>
                <p>- прочие финансовые структуры: после индивидуально согласования</p>
                <p>
                  - другие виды бизнеса: после индивидуального согласования (если что-то не
                  связанное с обменником, скорее всего будет отказ)
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imgRight}>
            <Image
              src='/images/condition/imageRightBg.png'
              width={413}
              height={457}
              alt='bg'
              className={styles.bg}
            />
            <Image
              src='/images/condition/shadowBg.png'
              width={413}
              height={457}
              alt='bg'
              className={styles.shadow}
            />
            <Image
              src='/images/condition/coins.png'
              width={312}
              height={177}
              alt='coins'
              className={styles.coins}
            />
          </div>
        </div>
      </div>
      <div className={styles.contentMethods} id='page-methods'>
        <div className={styles.wrapper}>
          <div className={styles.methods__header}>
            <div
              className={styles.methods__header_title}
              data-aos-duration='1100'
              data-aos='slide-up'
            >
              Методы пополнения и вывода
            </div>
          </div>
          <div className={styles.methods__block}>
            <div className={styles.methods__block_left} data-aos-duration='1100' data-aos='fade-up'>
              <div className={styles.methods__block_title}>
                <span>
                  Пополнение
                  <Image
                    src='/images/condition/methods/shadow_orange.png'
                    alt=''
                    width={492}
                    height={278}
                    className={styles.shadow}
                  />
                </span>
              </div>
              <div className={styles.methods__items}>
                {images.slice(0, 6).map((img, index) => (
                  <div
                    key={index}
                    className={styles.imageWrapper}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image alt='' src={img.src} width={img.width} height={img.height} />
                  </div>
                ))}
              </div>
            </div>
            <AnimatedSVG hoveredIndex={hoveredIndex} />
            <div
              className={styles.methods__block_right}
              data-aos-duration='1100'
              data-aos='fade-up'
            >
              <div className={styles.methods__block_title}>
                <span>
                  Вывод
                  <Image
                    src='/images/condition/methods/shadow_orange.png'
                    alt=''
                    width={492}
                    height={278}
                    className={styles.shadow}
                  />
                </span>
              </div>
              <div className={styles.methods__items}>
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={styles.imageWrapper}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image alt='' src={img.src} width={img.width} height={img.height} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.solution_task} id='page-task'>
            <div className={styles.block_title} data-aos-duration='1100' data-aos='slide-right'>
              <div className={styles.block_title__label}>Решение нестандартных задач:</div>
            </div>
            <div
              className={styles.solution_task__text}
              data-aos-duration='1100'
              data-aos='slide-left'
            >
              <p>
                В случае, если у Вас имеется нестандартная задача, которая связана с чем-либо из
                финансовой сферы:
              </p>
              <ol>
                <li>1. подключение эквайринга для вашего бизнеса как физ. лица</li>
                <li>2. перемещение денежных средств из одной страны в другую</li>
                <li>3. налаживание финансового потока для вашей системы</li>
                <li>4. безопасный кошелек для ваших средств</li>
                <li>5. возможность работы без чарджбеков и споров</li>
                <li>6. возможность принимать платежи без ограничений</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
