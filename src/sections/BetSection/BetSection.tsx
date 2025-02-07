'use client';

import React, { useState } from 'react';
import styles from './BetSection.module.scss';
import Image from 'next/image';
import { liMassive, liMassive2, tableData } from './data';
import Shedule from './Shedule/Shedule';
import { Crypto, Ecommerce, Exchanger, Wallet } from './Shedule/data';
import Link from 'next/link';
import clsx from 'clsx';

export default function BetSection() {
  const [countMounth, setCountMounth] = useState<number>(0);
  const [url, setUrl] = useState<string>('example.com');
  const [type, setType] = useState<string>(tableData[0].typeProject);
  const [betAquaring, setBetAquaring] = useState<string>('');
  const [betApi, setBetApi] = useState<string>('');
  const [dataShedule, setDataShedule] = useState<any>([
    {
      turnover: 0, // Случайное целое в диапазоне
      percent: 0,
    },
  ]);

  const setEcommerce = () => {
    if (countMounth === 0 || countMounth <= 100000) {
      if (url) {
        setBetAquaring('6,6 - 8,6%');
        setBetApi('6,0 - 6,8%');
        setDataShedule(Ecommerce.option1.withUrl);
      } else {
        setBetAquaring('6,6 - 8,4%');
        setBetApi('5,9 - 6,7%');
        setDataShedule(Ecommerce.option1.withoutUrl);
      }
    }
    if (countMounth === 100000 && countMounth <= 500000) {
      if (url) {
        setBetAquaring('6,5 - 8,3%');
        setBetApi('5,6 - 6,6%');
        setDataShedule(Ecommerce.option2.withUrl);
      } else {
        setBetAquaring('6,5 - 8,3%');
        setBetApi('5,6 - 6,6%');
        setDataShedule(Ecommerce.option2.withoutUrl);
      }
    }
    if (countMounth === 500000 && countMounth <= 1000000) {
      if (url) {
        setBetAquaring('6,0 - 8,2%');
        setBetApi('3,0 - 4,2%');
        setDataShedule(Ecommerce.option3.withUrl);
      } else {
        setBetAquaring('6,3 - 8,3%');
        setBetApi('5,6 - 6,5%');
        setDataShedule(Ecommerce.option3.withoutUrl);
      }
    }
    if (countMounth === 1000000 && countMounth <= 5000000) {
      if (url) {
        setBetAquaring('5,9 - 8,0%');
        setBetApi('3,0 - 4,0%');
        setDataShedule(Ecommerce.option4.withUrl);
      } else {
        setBetAquaring('6,0 - 8,2%');
        setBetApi('3,0 - 4,2%');
        setDataShedule(Ecommerce.option4.withoutUrl);
      }
    }
    if (countMounth === 5000000 && countMounth <= 10000000) {
      if (url) {
        setBetAquaring('5,8 - 8,0%');
        setBetApi('3,0 - 4,0%');
        setDataShedule(Ecommerce.option5.withUrl);
      } else {
        setBetAquaring('5,8 - 7,8%');
        setBetApi('3,0 - 4,0%');
        setDataShedule(Ecommerce.option5.withoutUrl);
      }
    }
    if (countMounth >= 10000000) {
      if (url) {
        setBetAquaring('5,7 - 7,8%');
        setBetApi('3,0 - 3,9%');
        setDataShedule(Ecommerce.option6.withUrl);
      } else {
        setBetAquaring('5,8 - 8,0%');
        setBetApi('3,0 - 4,0%');
        setDataShedule(Ecommerce.option6.withoutUrl);
      }
    }
  };

  const handleClickButton = () => {
    switch (type) {
      case 'Обменник':
        if (countMounth === 0 || countMounth <= 1000000) {
          if (url) {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('4,7 - 5,2%');
            setDataShedule(Exchanger.option1.withUrl);
          } else {
            setBetAquaring('5,3 - 6,5%');
            setBetApi('4,7 - 5,3%');
            setDataShedule(Exchanger.option1.withoutUrl);
          }
        }
        if (countMounth === 1000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('5,1 - 6%');
            setBetApi('4,5 - 5%');
            setDataShedule(Exchanger.option2.withUrl);
          } else {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('4,5 - 5,2%');
            setDataShedule(Exchanger.option2.withoutUrl);
          }
        }
        if (countMounth === 10000000 && countMounth <= 100000000) {
          if (url) {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,3 - 4,8%');
            setDataShedule(Exchanger.option3.withUrl);
          } else {
            setBetAquaring('5,1 - 6%');
            setBetApi('4,4 - 5%');
            setDataShedule(Exchanger.option3.withoutUrl);
          }
        }
        if (countMounth >= 100000000) {
          if (url) {
            setBetAquaring('4,9 - 6,0%');
            setBetApi('4,2 - 4,8%');
            setDataShedule(Exchanger.option4.withUrl);
          } else {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,3 - 4,8%');
            setDataShedule(Exchanger.option4.withoutUrl);
          }
        }
        break;

      case 'Криптовалютная биржа':
        if (countMounth === 0 || countMounth <= 1000000) {
          if (url) {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('4,5 - 5,2%');
            setDataShedule(Crypto.option1.withUrl);
          } else {
            setBetAquaring('5,3 - 6,5%');
            setBetApi('4,5 - 5,3%');
            setDataShedule(Crypto.option1.withoutUrl);
          }
        }
        if (countMounth === 1000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('5,1 - 6%');
            setBetApi('4,4 - 5%');
            setDataShedule(Crypto.option2.withUrl);
          } else {
            setBetAquaring('5,2 - 6,3%');
            setBetApi('4,5 - 5,2%');
            setDataShedule(Crypto.option2.withoutUrl);
          }
        }
        if (countMounth === 10000000 && countMounth <= 100000000) {
          if (url) {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,3 - 4,8%');
            setDataShedule(Crypto.option3.withUrl);
          } else {
            setBetAquaring('5,1 - 6%');
            setBetApi('4,4 - 5%');
            setDataShedule(Crypto.option3.withoutUrl);
          }
        }
        if (countMounth >= 100000000) {
          if (url) {
            setBetAquaring('4,9 - 6,0%');
            setBetApi('4,2 - 4,8%');
            setDataShedule(Crypto.option4.withUrl);
          } else {
            setBetAquaring('5,0 - 5,9%');
            setBetApi('4,3 - 4,8%');
            setDataShedule(Crypto.option4.withoutUrl);
          }
        }
        break;

      case 'Электронный кошелек':
        if (countMounth === 0 || countMounth <= 1000000) {
          if (url) {
            setBetAquaring('6,6 - 8,6%');
            setBetApi('6,0 - 6,8%');
            setDataShedule(Wallet.option1.withUrl);
          } else {
            setBetAquaring('6,6 - 8,4%');
            setBetApi('5,9 - 6,7%');
            setDataShedule(Wallet.option1.withoutUrl);
          }
        }
        if (countMounth === 1000000 && countMounth <= 10000000) {
          if (url) {
            setBetAquaring('6,5 - 8,3%');
            setBetApi('5,6 - 6,6%');
            setDataShedule(Wallet.option2.withUrl);
          } else {
            setBetAquaring('6,5 - 8,3%');
            setBetApi('5,6 - 6,6%');
            setDataShedule(Wallet.option2.withoutUrl);
          }
        }
        if (countMounth === 10000000 && countMounth <= 100000000) {
          if (url) {
            setBetAquaring('6,1 - 7,0%');
            setBetApi('5,5 - 6,2%');
            setDataShedule(Wallet.option3.withUrl);
          } else {
            setBetAquaring('6,3 - 8,3%');
            setBetApi('5,6 - 6,5%');
            setDataShedule(Wallet.option3.withoutUrl);
          }
        }
        if (countMounth >= 100000000) {
          if (url) {
            setBetAquaring('5,9 - 7,0%');
            setBetApi('5,5 - 6,0%');
            setDataShedule(Wallet.option4.withUrl);
          } else {
            setBetAquaring('6,1 - 7,0%');
            setBetApi('5,5 - 6,2%');
            setDataShedule(Wallet.option4.withoutUrl);
          }
        }
        break;

      case 'E-commerce':
        setEcommerce();
        break;

      default:
        setEcommerce();
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
        <Shedule data={dataShedule} />
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
                  placeholder='0'
                  type='number'
                  onChange={(e) => setCountMounth(Number(e.currentTarget.value))}
                />
              </td>
              <td>
                <input type='number' placeholder='0' />
              </td>
              <td>
                <input
                  type='text'
                  placeholder='Введите ваш домен'
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
            {(betApi || betAquaring) && (
              <tr>
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
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.icons}>
        <Link href='/' className={styles.icon}>
          <Image src={'/images/online.png'} alt='online' width={200} height={250} />
          <p className={styles.iconText}>Написать</p>
        </Link>
        <Link href='/' className={clsx(styles.icon, styles.iconTop)}>
          <Image src={'/images/clients/telephone.png'} alt='online' width={200} height={250} />
          <p className={styles.iconText}>Позвонить</p>
        </Link>
      </div>
    </section>
  );
}
