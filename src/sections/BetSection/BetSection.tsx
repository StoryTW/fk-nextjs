import React from 'react';
import styles from './BetSection.module.scss';
import Image from 'next/image';

const liMassive = [
  'Тип вашего проекта',
  'Сайт и репутация',
  'Наличие юридической конструкции',
  'Уровень риска чарджбеков и жалоб',
  'Уровень риска запросов от правоохранительных органов и уголовных дел',
  'Уровень риска запросов от регулирующих органов',
  'Месячный оборот проекта',
  'Колво платежей в месяц',
  'Средний чек',
  'Необходимость лицензирования деятельности',
  'Возраст проекта',
];

const liMassive2 = [
  'Кол-во подключенных проектов в нише',
  'Наш уровень жадности',
  'Конкуренция',
  'Продолжительность сотрудничества',
];

export default function BetSection() {
  return (
    <section className={styles.root} id='clientsSection'>
      <h2 className={styles.title}>
        РАССЧИТАТЬ СТАВКУ{' '}
        <Image
          src={'/images/about/orange_light_line.png'}
          alt='line'
          width={203}
          height={17}
          className={styles.line}
        />
      </h2>
      <div className={styles.content}>
        <Image
          src={'/images/clients/tarifs.png'}
          width={650}
          height={400}
          alt='tarif'
          className={styles.contentImg}
        />
        <div>
          <h2 className={styles.subtitle}>
            Поможем сформировать условия именно под Вашу модель работы
          </h2>
          <div className={styles.lists}>
            <div className={styles.list}>
              <h3 className={styles.h3}>От чего зависит ставка:</h3>
              <ul className={styles.ul}>
                {liMassive.map((li, i) => (
                  <li key={i} className={styles.li}>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.list}>
              <h3 className={styles.h3}>Что не влияет на ставку:</h3>
              <ul className={styles.ul}>
                {liMassive2.map((li, i) => (
                  <li key={i} className={styles.li}>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.tableContainer}>
          <thead>
            <tr>
              <th>Тип проекта:</th>
              <th>Месячный оборот:</th>
              <th>Кол-во платежей в месяц:</th>
              <th>URL проекта:</th>
              <th></th>
              <th>Ставка на эквайринг:</th>
              <th>Ставка на выплаты по API:</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.row}>
              <td>...</td>
              <td>1 000 000</td>
              <td>Любое значение</td>
              <td>firekassa/com</td>
              <td className={styles.calculateBtn}>рассчитать</td>
              <td>5.3% - 6.5%</td>
              <td>5.3% - 4.7%</td>
            </tr>
            <tr>
              <td className={styles.tdColFirst}>
                Трейдерам
                <br />
                Эл. Кошельку
                <br />
                E-commerce
              </td>
              <td colSpan={6} className={styles.tdText}>
                <span>
                  За более точным расчетом обращайтесь к нашим сотрудникам в предоставленной форме
                  ниже.
                </span>
                <br />
                <br />
                <p>Оставьте заявку на расчет тарифа, Наши специалисты свяжутся с Вами.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.icons}>
        <a href='/' className={styles.icon}>
          <Image src={'/images/online.png'} alt='online' width={200} height={250} />
          <p className={styles.iconText}>Написать</p>
        </a>
        <a href='/' className={styles.icon}>
          <Image src={'/images/clients/telephone.png'} alt='online' width={200} height={250} />
          <p className={styles.iconText}>Позвонить</p>
        </a>
      </div>
    </section>
  );
}
