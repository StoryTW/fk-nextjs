import React from 'react';
import styles from './ConditionSection.module.scss';
import Image from 'next/image';

export default function ConditionSection() {
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
                <Image alt='' src='/images/condition/methods/sber.png' width={106} height={28} />
                <Image alt='' src='/images/condition/methods/tinkoff.png' width={106} height={31} />
                <Image alt='' src='/images/condition/methods/rayf.png' width={117} height={26} />
                <Image alt='' src='/images/condition/methods/gaz.png' width={88} height={42} />
                <Image alt='' src='/images/condition/methods/alfa.png' width={142} height={28} />
                <Image alt='' src='/images/condition/methods/qmoney.png' width={91} height={19} />
              </div>
            </div>
            <div
              className={styles.methods__block_radius}
              data-aos-duration='1100'
              data-aos='fade-down'
            ></div>
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
                <Image alt='' src='/images/condition/methods/sber.png' width={106} height={28} />
                <Image alt='' src='/images/condition/methods/tinkoff.png' width={106} height={31} />
                <Image alt='' src='/images/condition/methods/rayf.png' width={117} height={26} />
                <Image alt='' src='/images/condition/methods/gaz.png' width={88} height={42} />
                <Image alt='' src='/images/condition/methods/alfa.png' width={142} height={28} />
                <Image alt='' src='/images/condition/methods/qmoney.png' width={91} height={19} />
                <Image alt='' src='/images/condition/methods/union.png' width={99} height={22} />
                <Image alt='' src='/images/condition/methods/tele.png' width={66} height={25} />
                <Image alt='' src='/images/condition/methods/bilayn.png' width={76} height={22} />
                <Image alt='' src='/images/condition/methods/megafon.png' width={94} height={17} />
                <Image alt='' src='/images/condition/methods/yota.png' width={52} height={24} />
                <Image alt='' src='/images/condition/methods/steam.png' width={87} height={28} />
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
