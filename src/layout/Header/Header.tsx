import React from 'react'
import styles from './Header.module.scss'
import { NavigationPanel } from './NavigationPanel/NavigationPanel'
import { SwiperBlock } from './SwiperBlock/SwiperBlock'
import { NextButton } from './NextButton/NextButton'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <NavigationPanel />
        <SwiperBlock />
        <NextButton />
      </div>
    </header>
  )
}
