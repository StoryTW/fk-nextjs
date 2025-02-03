import React, { FC, HTMLAttributes } from 'react';
import styles from './SocialsBlock.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

const DATA = [
  {
    src: '/images/contacts/whatsapp.png',
    href: 'https://api.whatsapp.com/send?phone=79963427459',
  },
  {
    src: '/images/contacts/telegram.png',
    href: 'https://t.me/+O9MX7Eezt5U2Mjcy ',
  },
  {
    src: '/images/contacts/email.png',
    href: 'mailto:sales@firekassa.com',
  },
  // {
  //   src: '/images/contacts/vk.png',
  //   href: '/',
  // },
];

export const SocialsBlock: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.text}>Мы в соцсетях:</div>
        <div className={styles.links}>
          {DATA.map((item, index) => {
            return (
              <a key={index} className={styles.link} href={item.href} target='_blank'>
                <Image src={item.src} width={24} height={24} alt={`icon-${index}`} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
