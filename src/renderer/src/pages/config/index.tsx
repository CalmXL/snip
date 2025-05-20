import { Outlet } from 'react-router'
// import styles from './styles.module.scss'

export default function Config() {
  return (
    <main>
      <Outlet />
      {/* <div className="drag"></div>
      <div className="drag"></div>
      <div className={styles.content}></div>
      <div className={styles.category}></div>
      <div className={styles.nav}></div> */}
    </main>
  )
}
