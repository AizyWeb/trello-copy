import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.herodiv}>
        <Image
          className={styles.heroicon}
          src='/trello-icon.png'
          alt='Trello Icon'
          height={150}
          width={150}
        />
        <h1>TrelloCopy</h1>
      </div>
      <div>
        <ul className={styles.headernav}>
          <li><a href='#'>Workspaces</a></li>
          <li><a href='#'>Starred</a></li>
          <li><a href='#' id={styles.createbtn}>Create</a></li>
        </ul>
      </div>
      <div>
        <ul className={styles.headernav} id={styles.profilenav}>
          <li>
            <Image
              src='/notification-bell.svg'
              alt='Notifications bell'
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src='/user-round.svg'
              alt='User profile picture'
              height={150}
              width={150}
            />
          </li>
        </ul>
      </div>
    </header>
  )
}
