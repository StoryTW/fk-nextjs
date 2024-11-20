import React, { FC } from 'react';
import styles from './CardOurTeam.module.scss';
import Image from 'next/image';

interface ICardOurTeam {
  image: string;
  name: string;
  description: string;
  width: number;
  height: number;
}

export const CardOurTeam: FC<ICardOurTeam> = ({ description, image, name, width, height }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} width={width} height={height} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
