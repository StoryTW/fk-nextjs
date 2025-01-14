import { TransparentHeader } from '@/layout/TransparentHeader/TransparentHeader';
import ImagesSection from '@/sections/ImagesSection/ImagesSection';
import styles from './ProjectLifePage.module.scss';
import React from 'react';
import { SOCIALS } from '@/sections/OurTeam/OurTeam.data';
import Image from 'next/image';
import { Online } from '@/components/Online/Online';

const images = [
  '/images/project-life-page/image.png',
  '/images/project-life-page/image2.png',
  '/images/project-life-page/image3.png',
  '/images/project-life-page/image4.png',
];

const images2 = [
  '/images/project-life-page/image5.png',
  '/images/project-life-page/image6.png',
  '/images/project-life-page/image7.png',
  '/images/project-life-page/image8.png',
];

const images3 = [
  '/images/project-life-page/image9.png',
  '/images/project-life-page/image10.png',
  '/images/project-life-page/image11.png',
  '/images/project-life-page/image12.png',
];
const ProjectLifePage = () => {
  return (
    <div className='container'>
      <div className={styles.inner}>
        <TransparentHeader />
        <Online className={styles.online} />
        <ImagesSection
          widthMidImg={468}
          heightMidImg={547}
          images={images}
          imgMiddle='/images/project-life-page/people.png'
        />
        <div className={styles.descriptions}>
          <p className={styles.text}>
            Наши команды любят активный образ жизни и отдых на пляже, и firekassa поощряет это.
            Ежегодные поездки в горы или на море стали традиционным событием. А интересные
            корпоративы у нас проходят чуть ли не каждый месяц.
            <br /> Поход на интересный квест, в лес или на базу отдыха приготовить шашлык, в кино, в
            загородный коттедж в баню или термы. Все это постоянно сопровождает наш коллектив.
          </p>
          <p className={styles.text}>
            Часто мы просто собираемся на ужин в каком-нибудь месте, но иногда по какому-нибудь
            поводу можем забронировать крышу ресторана и устроить полноценное празднование.
          </p>
        </div>
        <ImagesSection
          widthMidImg={611}
          heightMidImg={541}
          images={images2}
          imgMiddle='/images/project-life-page/people2.png'
          isReverse
        />
        <div className={styles.description}>
          <p className={styles.text}>
            Те кто отдохнул вечером в караоке, отправляются с утра кататься в горы. Лагерь как
            всегда разделился, на сноубордистов и лыжников.
          </p>
        </div>
        <ImagesSection
          widthMidImg={431}
          heightMidImg={64}
          className={styles.imagesSection3}
          isOrangeBackMidImg={false}
          images={images3}
          imgMiddle='/images/project-life-page/logo_fk.png'
        />
        <div className={styles.descriptions}>
          <p className={styles.text}>
            Одно из наших любимых мест в России - конечно же Сочи. При правильно выбранном сезоне
            здесь найдутся развлечения для каждого. В какой-то момент у нас даже появилась идея
            переместить сюда офис. Но обошлось долгосрочной командировкой нескольких из сотрудников.
          </p>
        </div>
        <div className={styles.setiWrapper}>
          <p>Мы в соцсетях:</p>
          <div className={styles.socials}>
            {SOCIALS.map((icon, index) => {
              return (
                <a key={index} href={icon.href} target='_blank'>
                  <Image src={icon.src} alt={icon.name} width={26} height={26} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLifePage;
