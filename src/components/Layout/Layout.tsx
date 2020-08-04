import React, { FC } from 'react'
import styles from './Layout.module.scss'

const Layout: FC = ({ children }) => (
  <div className={styles.container} data-testid='main-wrapper'>
    <main>{children}</main>
  </div>
)

export default Layout
