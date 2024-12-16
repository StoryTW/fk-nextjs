import React from 'react'
import styles from './NavigationPanel.module.scss'
import { Logo } from '@/components/Logo/Logo'
// import { Navbar } from '../Navbar/Navbar'
import { NavMenu } from '@/components/ui/NavMenu/NavMenu'

export const NavigationPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.wrapper}>
        <Logo />
        {/* <Navbar /> */}
        <NavMenu />
      </div>
    </div>
  )
}
