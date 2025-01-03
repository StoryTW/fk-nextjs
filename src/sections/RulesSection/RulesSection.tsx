import React from 'react';
import styles from './RulesSection.module.scss';
import Image from 'next/image';

export default function RulesSection() {
  return (
    <section className={styles.rules}>
      <h2 className={styles.title}>
        ПРАВИЛА
        <Image
          src={'/images/our-team/orange_light_line.png'}
          alt='line'
          width={249}
          height={19}
          className={styles.line}
        />
      </h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={'/images/rules/rules_image.png'} alt='safebox' width={183} height={348} />
        </div>
        <p className={styles.text}>
          Мы тщательно выбираем своих клиентов. У нас обслуживаются только порядочные и
          добросовестные граждане. Мы отклоняем любые предложения о “приватном” сотрудничестве,
          крышевании мошенников и прочих поганых структур. У нас имеются анти-фрод системы, которые
          по косвенным признакам распознают и предотвращают деятельность клиентов, которые
          занимаются не тем, чем заявлено. Клиент должен заниматься только той деятельностью, о
          которой заявил. Никаких скольжений вправо-влево, если клиент занимается тем, о чем не
          сообщил при модерации, то FireKassa вправе считать такого клиента мошенником. Примеры:
          передача апи сторонним клиентам, тайное сотрудничество со скам-проектами, финансовыми
          пирамидами, хайп-проектами, казино, беттингом или их посредниками или представителями.
          Если было заявлено об обменной деятельности и трафике с бестчендж – значит должна
          выполняться только обменная деятельность, для клиентов которые приходят из беста. Работа
          на биржах: deez, risex, skybanker, skypay, skycrypto, totalcoin, chatex и прочих других
          непубличных ресурсах строжайше запрещена. Обменники обязаны принимать платежи минимум от
          5,000 рублей. Трейдеры обязаны принимать платежи минимум от 8,000 рублей.
          <br />
          <br />В случае сотрудничества с площадками недобросовестными и неизвестными – Вы рискуете
          быть втянутыми в мутные истории и после разбираться с ними не один десяток лет. Не редки
          случаи, когда агенты-площадки предоставляют “особый” трафик для клиента, а сами
          сотрудничают с площадками по распространению наркотических веществ, тем самым втягивая вас
          в мутную муть
        </p>
      </div>
    </section>
  );
}
