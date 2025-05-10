import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search() {
  const { search, handleSearch } = useSearch()

  return (
    <main className="bg-slate-50 p-3 rounded-xl drag">
      <section className="nodrag bg-slate-200 p-3 rounded-lg flex items-center gap-2">
        <button
          onClick={() => {
            window.api
              .sql(`insert into categories (name, created_at) values('vue3', datetime())`, 'insert')
              .then((rows) => {
                console.log(rows)
              })
          }}
        >
          查询
        </button>
        <SettingOne
          theme="outline"
          size="24"
          fill="#34495e"
          strokeWidth={4}
          className="cursor-pointer"
          onClick={() => {
            window.api.openConfigWindow()
          }}
        />
        <Input value={search} onChange={handleSearch} autoFocus />
      </section>
    </main>
  )
}
