import React from 'react';
import styles from './ClientsSection.module.scss';
import Image from 'next/image';

const clientGroups = [
  {
    title: 'Bitpapa',
    icon: '/images/clients/traiders/bitpapa.svg',
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
    icon: '/images/clients/traiders/binance.svg',
    clients: ['Telepat77', 'Peer2u', 'arb_arb', 'Billion_Dollars', 'Wins_'],
  },
  {
    title: 'Garantex',
    icon: '/images/clients/traiders/Garantex.svg',
    clients: ['Odnokassanie', 'Telepat77', 'arb_arb', 'Cerber 2.0'],
  },
];

export default function ClientsSection() {
  return (
    <section className={styles.root} id='partnersSection'>
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
                width={225}
                height={55}
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
                src={'/images/clients/crypto/cryptonex.svg'}
                width={93}
                height={93}
                className={styles.img}
                alt='img'
              />
            </div>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/exmo.svg'}
                width={53}
                height={53}
                className={styles.img}
                alt='img'
              />
            </div>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/investority.svg'}
                width={93}
                height={93}
                className={styles.img}
                alt='img'
              />
            </div>
            <div className={styles.itemCrypto}>
              <Image
                src={'/images/clients/crypto/tokenspot.svg'}
                width={93}
                height={93}
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
                src={'/images/clients/exchanger/laslobit.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/crypster.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/exchanger/fastchange.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/bixter.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/cryptoxchange.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/exchanger/coinbank.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/swapex.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/16tonn.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/exchanger/barry24.svg'}
                alt={'обменники'}
                width={190}
                height={50}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/exchanger/perfectchange.svg'}
                alt={'обменники'}
                width={190}
                height={60}
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
                src={'/images/clients/ecommerce/morelikes.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/ipayer.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/slivkursov.net.svg'}
                alt={'обменники'}
                width={160}
                height={55}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/profitsmm.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/sms4you.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/vaksms.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/robux.io.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/steamcoin.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/acidmine.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/minelegacy.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/politmine.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/fotoget1.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
            <div className={styles.item}>
              <Image
                src={'/images/clients/ecommerce/narayanaservices.svg'}
                alt={'обменники'}
                width={170}
                height={55}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/tricksmaster.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
              <Image
                src={'/images/clients/ecommerce/reallyworld.svg'}
                alt={'обменники'}
                width={140}
                height={45}
                className={styles.hexagon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
