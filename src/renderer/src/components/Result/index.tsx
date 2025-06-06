import styles from './style.module.scss'
import useSelect from '@renderer/hooks/useSelect'
export default function Result() {
  const { data, id, selectItem } = useSelect()
  return (
    <main className={styles.main}>
      {data.map((item, _index) => (
        <div
          className={`${styles.item} ${id == item.id ? styles.active : ''}`}
          key={item.id}
          onClick={() => selectItem(item.id)}
        >
          {item.content}
        </div>
      ))}
    </main>
  )
}
