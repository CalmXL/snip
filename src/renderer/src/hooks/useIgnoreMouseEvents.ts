import { RefObject } from "react"

export default () => {
  const setIgnoreMouseEvents = <T extends HTMLElement>(el: RefObject<T>) => {
    el.current?.addEventListener('mouseover', () => {
      window.api.setIgnoreMouseEvents(false)
    })

    document.body?.addEventListener('mouseover', (e: MouseEvent) => {

      if (document.body === e.target) {
        window.api.setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }

  return { setIgnoreMouseEvents }
}
