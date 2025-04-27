import { useStore } from '@renderer/store/useStore'
import { useCallback, useEffect, useState } from 'react'

export default () => {
  // const { data, setData } = useCode()
  // const data = useStore((state) => state.data)
  // const setData = useStore((state) => state.setData)
  const { data, setData, setSearch } = useStore((state) => state)
  const [id, setId] = useState(0)

  const selectItem = useCallback(
    (id: number) => {
      console.log(id)

      const content = data.find((item) => item.id == id)?.content
      if (content) {
        // 调用剪切板并写入数据
        navigator.clipboard.writeText(content)
        // 选择完毕后将数组清空
        setData([])
        // 选择完毕后清空search
        setSearch('')
        window.api.hideWindow()
      }
    },
    [data, setData, setSearch]
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
