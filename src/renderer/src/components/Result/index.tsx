import useCode from '@renderer/hooks/useCode'
import { useEffect } from 'react'

export default function Result() {
  const { data } = useCode()

  const handleKeyEvent = (e: KeyboardEvent) => {
    console.log(data.length)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)

    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [data])

  return (
    <main className="bg-slate-50 px-3 pb-2 -mt-[10px] rounded-bl-xl rounded-br-xl">
      {data.map((item) => (
        <div key={item.id} className="text-slate-700 truncate mb-2">
          {item.content}
        </div>
      ))}
    </main>
  )
}
