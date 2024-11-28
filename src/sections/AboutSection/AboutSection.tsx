import React from 'react';
import styles from './AboutSection.module.scss';
import Image from 'next/image';

const DATA = [
  {
    id: 1,
    text: (
      <p>
        Мы специализируемся на работе с финансовыми структурами с 2012 года.
        <br />
        Среди наших клиентов – топ-обменники bestchange и одни из первых трейдеров localbitcoins.
      </p>
    ),
  },
  {
    id: 2,
    text: (
      <p>
        Мы предоставляем клиентам возможность работать с платежными системами и банками без риска
        блокировки или заморозки денежных средств.
      </p>
    ),
  },
  {
    id: 3,
    text: (
      <p>
        Мы выдвигаем определенные требования к работе с клиентами, благодаря которым имеется
        возможность иметь партнерские отношения с банками, снижать риск фрода и мошенничества и
        благополучно взаимодействовать на протяжении многих лет.
      </p>
    ),
  },
  {
    id: 4,
    text: (
      <p>
        За многие годы Мы выработали четкие и понятные сценарии решения любых проблем, которые
        остановили бы деятельность рядового трейдера или обменника. Мы являемся структурой, которая
        не просто позволяет принимать платежи и делать выплаты, а которая защищает от все возможных
        вопросов, проблем со стороны банков, платежных систем, мошенников, фрода, форс-мажоров,
        краж, взломов и прочих негативных сценариев.
      </p>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id='#about' className={styles.aboutUs}>
      <h2 className={styles.title}>
        О НАС
        <Image
          src={'/images/about/orange_light_line.png'}
          alt='line'
          width={84}
          height={17}
          className={styles.line}
        />
      </h2>
      <div className={styles.content}>
        <Image
          src={'/images/about/about-img.png'}
          alt='img'
          width={323}
          height={556}
          className={styles.img}
        />
        <ul className={styles.list}>
          {DATA.map((item) => {
            return (
              <li key={item.id} className={styles.item}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
