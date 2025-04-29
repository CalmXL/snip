import Error from './components/Error'
import Result from './components/Result'
import Search from './components/Search'
import { CodeProvider } from './context/CodeContext'
import useShortCut from './hooks/useShortCut'
function App() {
  const { register } = useShortCut()
  register('CommandOrControl+Shift+]')

  return (
    <>
      <CodeProvider>
        <main className='relative'>
          <Error />
          <Search />
          <Result />
        </main>
      </CodeProvider>
    </>
  )
}

export default App
