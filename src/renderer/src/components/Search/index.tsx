import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'
import { useEffect, useRef } from 'react'

export default function Search() {
  const { search, handleSearch } = useSearch()

  return (
    <main className="bg-slate-50 p-3 rounded-xl drag" >
      <section className="nodrag bg-slate-200 p-3 rounded-lg flex items-center gap-2">
        <SettingOne
          theme="outline"
          size="24"
          fill="#34495e"
          strokeWidth={4}
          className="cursor-pointer"
          onClick={() => {
            alert('配置页面')
          }}
        />
        <Input
          value={search}
          onChange={handleSearch}
          autoFocus
        />
      </section>
    </main>
  )
}
