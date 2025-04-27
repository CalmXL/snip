import styles from './style.module.scss'
import useCodeSelect from '@renderer/hooks/useCodeSelect'
export default function Result() {
  const { data, id, selectItem } = useCodeSelect()
  return (
    <main className={styles.main}>
      {data.map((item, index) => (
        <div
          className={`${styles.item} ${id == index ? styles.active : ''}`}
          key={item.id}
          onClick={() => selectItem(item.id)}
        >
          {item.content}
        </div>
      ))}
    </main>
}
)
