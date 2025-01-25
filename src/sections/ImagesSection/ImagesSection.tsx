import React, { FC } from 'react';
import styles from './ImagesSection.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

type TImageBlock = {
  src: string;
};

const ImageBlock: FC<TImageBlock> = ({ src }) => {
  return (
    <div className={styles.block}>
      <Image src={src} width={477} height={284} alt='image' />
      <Image
        src={'/images/project-life-page/image-el.png'}
        width={459}
        height={507}
        alt='image-el'
        className={styles.imagesEl}
      />
    </div>
  );
};

type TImagesSections = {
  isReverse?: boolean;
  images: string[];
  imgMiddle: string;
  widthMidImg: number;
  heightMidImg: number;
  isOrangeBackMidImg?: boolean;
  isBlueBackMidImg?: boolean;
  className?: string;
};

const ImagesSection: FC<TImagesSections> = ({
  isReverse,
  images,
  imgMiddle,
  widthMidImg,
  heightMidImg,
  isOrangeBackMidImg = true,
  isBlueBackMidImg = true,
  className,
}) => {
  return (
    <div className={clsx(styles.root, className, { [styles.reverse]: isReverse })}>
      <div className={styles.row}>
        <ImageBlock src={images[0]} />
        <div className={styles.imageMiddle}>
          {isOrangeBackMidImg && (
            <Image
              src={'/images/project-life-page/orange-back.png'}
              width={780}
              height={776}
              alt='orange'
              className={styles.orange}
            />
          )}
          {isBlueBackMidImg && (
            <Image
              src={'/images/project-life-page/blue.png'}
              width={780}
              height={776}
              alt='orange'
              className={styles.orange}
            />
          )}
          <Image
            src={imgMiddle}
            width={widthMidImg}
            height={heightMidImg}
            alt='people'
            className={styles.people}
          />
        </div>
        <ImageBlock src={images[3]} />
      </div>
      <div className={styles.row2}>
        <ImageBlock src={images[1]} />
        <ImageBlock src={images[2]} />
      </div>
    </div>
  );
};

export default ImagesSection;
