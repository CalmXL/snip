import { useStore } from '@renderer/store/useStore'
import { useEffect } from 'react'

export default function Error() {
  const { error, setError } = useStore()

  useEffect(() => {
    const id = setTimeout(() => setError(''), 2000)
    return () => {
      clearTimeout(id)
    }
  }, [setError, error])

  if (!error) return <></>
  return <div className="bg-red-600 text-white">{error}</div>
}
