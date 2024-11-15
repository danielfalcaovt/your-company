import React from 'react'
import * as styles from './header-styles.scss'
import ConfirmButton from '@/presentation/elements/buttons/confirm-button'
import AppIcon from '@/presentation/elements/icons/app-icon'
import NavBar from './elements/nav-bar'

export default function Header (): JSX.Element {
  return (
    <header id="pageHeader" className={styles.headerComponentContainer}>
      <div className={styles.headerComponent}>
        <div className={styles.headerIcon}>
          <AppIcon iconClickFunction={() => window.location.reload()} imgSrc="/imgs/assets/app-icon.png" title="Your Corp." />
        </div>
        <div className={styles.headerMain}>
          <NavBar />
        </div>
        <div className={styles.headerButton}>
          <ConfirmButton text="Get Started" />
        </div>
      </div>
    </header>
  )
}
