import { codeData } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, useState } from 'react'

export default function Search() {
  const { setData } = useCode()
  const [search, setSearch] = useState('')
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const content = e.target.value
    setSearch(content)

    setData(
      codeData.filter((code) => code.content.toLowerCase().includes(content.toLowerCase() || '@@@'))
    )
  }

  return (
    <main className="bg-slate-50 p-3 rounded-xl drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={search}
          onChange={handleSearch}
          className="w-full outline-none text-xl text-slate-600"
          type="text"
        />
      </section>
    </main>
  )
}
