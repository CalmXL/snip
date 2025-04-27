import styles from './style.module.scss'
import useCodeSelect from '@renderer/hooks/useCodeSelect'
export default function Result() {
  const { data, currentIndex } = useCodeSelect()
  return (
    <main className={styles.main}>
      {data.map((item, index) => (
        <div
          className={`${styles.item} ${currentIndex == index ? styles.active : ''}`}
          key={item.id}
        >
          {item.content}
        </div>
      ))}
    </main>
  )
}
