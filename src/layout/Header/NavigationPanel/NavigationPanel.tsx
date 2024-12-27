import React from 'react'
import styles from './NavigationPanel.module.scss'
import { Logo } from '@/components/Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { Burger } from '@/components/Burger/Burger'

export const NavigationPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.wrapper}>
        <Logo />
        <Navbar />
        <Burger />
      </div>
    </div>
  )
}
