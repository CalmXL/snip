import useSearch from '@renderer/hooks/useSearch'

export default function Search() {
  const { search, handleSearch } = useSearch()

  return (
    <main className="bg-slate-50 p-3 rounded-xl drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={search}
          onChange={handleSearch}
          className="w-full bg-slate-200 outline-none text-xl text-slate-600"
          type="text"
        />
      </section>
    </main>
  )
}
