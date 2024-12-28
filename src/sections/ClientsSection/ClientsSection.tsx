import React from 'react';
import styles from './ClientsSection.module.scss';
import Image from 'next/image';

const clientGroups = [
  {
    title: 'Bitpapa',
    icon: '/images/clients/traiders/bitpapa.png',
    clients: [
      'WORK-BTC',
      'RV0101',
      'БЕТЕП',
      'Anton_fly7',
      'blingblaww',
      'RKO01',
      'Sestra',
      'BitMama',
      'Self1sh',
    ],
  },
  {
    title: 'Binance',
    icon: '/images/clients/traiders/binance.png',
    clients: ['Telepat77', 'Peer2u', 'arb_arb', 'Billion_Dollars', 'Wins_'],
  },
  {
    title: 'Garantex',
    icon: '/images/clients/traiders/garantex.png',
    clients: ['Odnokassanie', 'Telepat77', 'arb_arb', 'Cerber 2.0'],
  },
];

export default function ClientsSection() {
  return (
    <section className={styles.root}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          Наши клиенты
          <Image
            src={'/images/our-team/orange_light_line.png'}
            alt='line'
            width={249}
            height={19}
            className={styles.line}
          />
        </h2>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.head}>
            <p className={styles.paragraph}>трейдеры</p>
            <Image
              src={'/images/clients/hexagon.png'}
              alt={'трейдеры'}
              width={21}
              height={23}
              className={styles.hexagon}
            />
          </div>
          {clientGroups.map((group, index) => (
            <div key={index} className={styles.content}>
              <Image
                src={group.icon}
                alt={group.title}
                width={125}
                height={25}
                className={styles.traidersIcon}
              />
              <div className={styles.clientColumns}>
                <ul className={styles.clientList}>
                  {group.clients
                    .slice(0, Math.ceil(group.clients.length / 2))
                    .map((client, idx) => (
                      <li key={idx} className={styles.client}>
                        {client}
                      </li>
                    ))}
                </ul>
                <ul className={styles.clientList}>
                  {group.clients.slice(Math.ceil(group.clients.length / 2)).map((client, idx) => (
                    <li key={idx} className={styles.client}>
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <p className={styles.paragraph}>криптобиржи</p>
            <Image
              src={'/images/clients/hexagon.png'}
              alt={'трейдеры'}
              width={21}
              height={23}
              className={styles.hexagon}
            />
          </div>

          <div className={styles.contentCrypto}>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/01.png'}
                width={33}
                height={33}
                className={styles.img}
                alt='img'
              />
            </div>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/02.png'}
                width={33}
                height={33}
                className={styles.img}
                alt='img'
              />
            </div>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/03.png'}
                width={33}
                height={33}
                className={styles.img}
                alt='img'
              />
            </div>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/04.png'}
                width={33}
                height={33}
                className={styles.img}
                alt='img'
              />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <p className={styles.paragraph}>обменники</p>
            <Image
              src={'/images/clients/hexagon.png'}
              alt={'трейдеры'}
              width={21}
              height={23}
              className={styles.hexagon}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/01.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/02.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/exchanger/03.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/04.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/05.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/exchanger/06.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/07.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/08.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/exchanger/09.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/10.png'}
                alt={'обменники'}
                width={100}
                height={20}
                className={styles.hexagon}
              />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <p className={styles.paragraph}>e-commerce</p>
            <Image
              src={'/images/clients/hexagon.png'}
              alt={'трейдеры'}
              width={21}
              height={23}
              className={styles.hexagon}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/01.png'}
                alt={'обменники'}
                width={104}
                height={15}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/02.png'}
                alt={'обменники'}
                width={79}
                height={21}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/03.png'}
                alt={'обменники'}
                width={113}
                height={13}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/06.png'}
                alt={'обменники'}
                width={40}
                height={40}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/05.png'}
                alt={'обменники'}
                width={34}
                height={38}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/04.png'}
                alt={'обменники'}
                width={108}
                height={26}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/09.png'}
                alt={'обменники'}
                width={104}
                height={21}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/08.png'}
                alt={'обменники'}
                width={94}
                height={28}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/07.png'}
                alt={'обменники'}
                width={21}
                height={40}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/10.png'}
                alt={'обменники'}
                width={91}
                height={22}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/11.png'}
                alt={'обменники'}
                width={106}
                height={22}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/12.png'}
                alt={'обменники'}
                width={110}
                height={22}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/13.png'}
                alt={'обменники'}
                width={30}
                height={22}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/14.png'}
                alt={'обменники'}
                width={29}
                height={28}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/15.png'}
                alt={'обменники'}
                width={71}
                height={28}
                className={styles.hexagon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
