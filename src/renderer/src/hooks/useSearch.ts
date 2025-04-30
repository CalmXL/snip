import { codeData } from '@renderer/data'
import { useStore } from '@renderer/store/useStore'
import { ChangeEvent } from 'react'

export default () => {
  const setData = useStore((state) => state.setData)
  const search = useStore((state) => state.search)
  const setSearch = useStore((state) => state.setSearch)
  // const [search, setSearch] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value
    setSearch(content)

    setData(
      codeData.filter((code) => code.content.toLowerCase().includes(content.toLowerCase() || '@@@'))
    )
  }

  return {
    search,
    handleSearch
  }
}
