import { useStore } from '@renderer/store/useStore'

export default () => {
  const setError = useStore((state) => state.setError)
  const register = async (shortCut: string = 'CommandOrControl+Shift+;') => {
    const isBind = await window.api.shortCut('search', shortCut)
    console.log(isBind)

    isBind || setError('快捷键注册失败')
  }

  return {
    register
  }
}
