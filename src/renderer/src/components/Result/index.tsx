import useCode from '@renderer/hooks/useCode'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

console.log(styles.main)
export default function Result() {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (data.length === 0) return
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((prev) => (prev - 1 <= 0 ? data.length - 1 : prev - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((prev) => (prev + 1 >= data.length ? 0 : prev + 1))
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data])

  // ${currentIndex == index ? 'bg-orange-300' : ''}
  return (
    <main className={styles.main}>
      {currentIndex}
      {data.map((item, index) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </main>
  )
}
