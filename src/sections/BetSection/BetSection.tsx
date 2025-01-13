'use client';

import React, { useState } from 'react';
import styles from './BetSection.module.scss';
import Image from 'next/image';
import { liMassive, liMassive2, tableData } from './data';

export default function BetSection() {
  const [countMounth, setCountMounth] = useState<number>(0);
  const [url, setUrl] = useState<string>('');
  const [type, setType] = useState<string>(tableData[0].typeProject);
  const [betAquaring, setBetAquaring] = useState<string>('5,3 - 6,5%');
  const [betApi, setBetApi] = useState<string>('5,3 - 4,7%');

  const handleClickButton = () => {
    switch (type) {
      case 'Обменник':
        if (countMounth === 0 && countMounth <= 1000000) {
          if (url) {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('5,2 - 4,7%');
          } else {
            setBetAquaring('5,3 - 6,5%');
            setBetApi('5,3 - 4,7%');
          }
        }
        if (countMounth === 1000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('5,1 - 6%');
            setBetApi('5 - 4,5%');
          } else {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('5,2 - 4,5%');
          }
        }
        if (countMounth === 10000000 && countMounth <= 100000000) {
          if (url) {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,8 - 4,3%');
          } else {
            setBetAquaring('5,1 - 6%');
            setBetApi('5 - 4,4%');
          }
        }
        if (countMounth >= 100000000) {
          if (url) {
            setBetAquaring('4,9 - 6,0%');
            setBetApi('4,8 - 4,2%');
          } else {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,8 - 4,3%');
          }
        }
        break;

      case 'Криптовалютная биржа':
        if (countMounth === 0 && countMounth <= 1000000) {
          if (url) {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('5,2 - 4,5%');
          } else {
            setBetAquaring('5,3 - 6,5%');
            setBetApi('5,3 - 4,5%');
          }
        }
        if (countMounth === 1000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('5,1 - 6%');
            setBetApi('5 - 4,4%');
          } else {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('5,2 - 4,5%');
          }
        }
        if (countMounth === 10000000 && countMounth <= 100000000) {
          if (url) {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,8 - 4,3%');
          } else {
            setBetAquaring('5,1 - 6%');
            setBetApi('5 - 4,4%');
          }
        }
        if (countMounth >= 100000000) {
          if (url) {
            setBetAquaring('4,9 - 6,0%');
            setBetApi('4,8 - 4,2%');
          } else {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,8 - 4,3%');
          }
        }
        break;

      case 'Электронный кошелек':
        if (countMounth === 0 && countMounth <= 1000000) {
          if (url) {
            setBetAquaring('6,6 - 8,6%');
            setBetApi('6,8 - 6,0%');
          } else {
            setBetAquaring('6,6 - 8,4%');
            setBetApi('6,7 - 5,9%');
          }
        }
        if (countMounth === 1000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('6,5 - 8,3%');
            setBetApi('6,6 - 5,6%');
          } else {
            setBetAquaring('6,5 - 8,3%');
            setBetApi('6,6 - 5,6%');
          }
        }
        if (countMounth === 10000000 && countMounth <= 100000000) {
          if (url) {
            setBetAquaring('6,1 - 7,0%');
            setBetApi('6,2 - 5,5%');
          } else {
            setBetAquaring('6,3 - 8,3%');
            setBetApi('6,5 - 5,6%');
          }
        }
        if (countMounth >= 100000000) {
          if (url) {
            setBetAquaring('5,9 - 7,0%');
            setBetApi('6,0 - 5,5%');
          } else {
            setBetAquaring('6,1 - 7,0%');
            setBetApi('6,2 - 5,5%');
          }
        }
        break;

      case 'E-commerce':
        if (countMounth === 0 && countMounth <= 100000) {
          if (url) {
            setBetAquaring('6,6 - 8,6%');
            setBetApi('6,8 - 6,0%');
          } else {
            setBetAquaring('6,6 - 8,4%');
            setBetApi('6,7 - 5,9%');
          }
        }
        if (countMounth === 100000 && countMounth <= 500000) {
          if (url) {
            setBetAquaring('6,5 - 8,3%');
            setBetApi('6,6 - 5,6%');
          } else {
            setBetAquaring('6,5 - 8,3%');
            setBetApi('6,6 - 5,6%');
          }
        }
        if (countMounth === 500000 && countMounth <= 1000000) {
          if (url) {
            setBetAquaring('6,0 - 8,2%');
            setBetApi('3,0 - 4,2%');
          } else {
            setBetAquaring('6,3 - 8,3%');
            setBetApi('6,5 - 5,6%');
          }
        }
        if (countMounth === 1000000 && countMounth <= 5000000) {
          if (url) {
            setBetAquaring('5,9 - 8,0%');
            setBetApi('3,0 - 4,0%');
          } else {
            setBetAquaring('6,0 - 8,2%');
            setBetApi('3,0 - 4,2%');
          }
        }
        if (countMounth === 5000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('5,8 - 8,0%');
            setBetApi('3,0 - 4,0%');
          } else {
            setBetAquaring('5,8 - 7,8%');
            setBetApi('3,0 - 4,0%');
          }
        }
        if (countMounth >= 10000000) {
          if (url) {
            setBetAquaring('5,7 - 7,8%');
            setBetApi('3,0 - 3,9%');
          } else {
            setBetAquaring('5,8 - 8,0%');
            setBetApi('3,0 - 4,0%');
          }
        }
        break;

      default:
        setBetAquaring('ТОЖЕ ЧТО ECOMMERCE');
        setBetApi('ТОЖЕ ЧТО ECOMMERCE');
        break;
    }
  };

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
              <td>
                <select value={type} onChange={(e) => setType(e.currentTarget.value)}>
                  {tableData.map((item) => (
                    <option value={item.typeProject} key={item.typeProject}>
                      {item.typeProject}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type='number'
                  value={countMounth}
                  onChange={(e) => setCountMounth(Number(e.currentTarget.value))}
                />
              </td>
              <td>
                <input type='text' value='Любое значение' readOnly />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='firekassa/com'
                  value={url}
                  onChange={(e) => setUrl(e.currentTarget.value)}
                />
              </td>
              <td className={styles.calculateBtn} onClick={handleClickButton}>
                рассчитать
              </td>
              <td>{betAquaring}</td>
              <td>{betApi}</td>
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
