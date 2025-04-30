import { RefObject, useEffect, useRef } from 'react'
import Error from '@renderer/components/Error'
import Result from '@renderer/components/Result'
import Search from '@renderer/components/Search'
import { CodeProvider } from '@renderer/context/CodeContext'
import useShortCut from '@renderer/hooks/useShortCut'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
function Home() {
  const { register } = useShortCut()
  register('CommandOrControl+Shift+]')
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()

  useEffect(() => {
    setIgnoreMouseEvents(mainRef as RefObject<HTMLElement>)
  }, [])

  return (
    <>
      <CodeProvider>
        <main className='relative p-3' ref={mainRef}>
          <Error />
          <Search />
          <Result />
        </main>
      </CodeProvider>
    </>
  )
}

export default Home
