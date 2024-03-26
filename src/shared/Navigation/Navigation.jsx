import React from 'react'
import { Link } from 'react-router-dom'
import circle_arrow_dark from '../../components/icons/circle_arrow_dark.png'

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Datarind
      </Link>
      <Link to="userslist">Users</Link>
      <Link to="userslist">Clients</Link>
      <Link to="userslist">Calendar</Link>
      <Link to="userslist">About</Link>
      <Link to="userslist">
        <img src={circle_arrow_dark} alt="Log in" />
        <span>Log in</span>
      </Link>
    </div>
  )
}

export default Navigation
