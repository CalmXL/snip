import useCode from '@renderer/hooks/useCode'
import { useCallback, useEffect, useState } from 'react'

export default () => {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setCurrentIndex((prev) => (prev - 1 <= 0 ? data.length - 1 : prev - 1))
          break
        case 'ArrowDown':
          setCurrentIndex((prev) => (prev + 1 >= data.length ? 0 : prev + 1))
          break
        case 'Enter':
          // 调用剪切板并写入数据
          navigator.clipboard.writeText(data[currentIndex].content)
          break
      }
    },
    [data, currentIndex]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  useEffect(() => {
    setCurrentIndex(0)
  }, [data])

  return {
    data,
    currentIndex
  }
}
