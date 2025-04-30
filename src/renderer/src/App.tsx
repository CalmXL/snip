import { RefObject, useEffect, useRef } from 'react'
import Error from './components/Error'
import Result from './components/Result'
import Search from './components/Search'
import { CodeProvider } from './context/CodeContext'
import useShortCut from './hooks/useShortCut'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'
function App() {
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

export default App
