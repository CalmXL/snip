import useCode from '@renderer/hooks/useCode'
import { useCallback, useEffect, useState } from 'react'

export default () => {
  const { data } = useCode()
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [id, setId] = useState(0)

  const selectItem = useCallback(
    (id: number) => {
      console.log(id)

      const content = data.find((item) => item.id == id)?.content
      if (content) {
        // 调用剪切板并写入数据
        navigator.clipboard.writeText(content)
        window.api.hideWindow()
      }
    },
    [data]
  )

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp':
          setId((id) => {
            const index = data.findIndex((item) => item.id == id)
            return data[index - 1]?.id || data[data.length - 1].id
          })
          break
        case 'ArrowDown':
          setId((id) => {
            const index = data.findIndex((item) => item.id == id)
            return data[index + 1]?.id || data[0].id
          })
          break
        case 'Enter': {
          selectItem(id)
          break
        }
      }
    },
    [data, id, selectItem]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])

  useEffect(() => {
    setId(0)
  }, [data])

  return {
    data,
    id,
    selectItem
  }
}
