import React from 'react'
import styles from './RulesSection.module.scss'
import Image from 'next/image'

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
        
      </div>
    </section>
  )
}