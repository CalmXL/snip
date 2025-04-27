import { codeData } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, useState } from 'react'

export default () => {
  const { setData } = useCode()
  const [search, setSearch] = useState('')
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
