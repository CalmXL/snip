import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'

const config = {
  search: ''
}

export const registerShortCut = (win: BrowserWindow) => {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: 'search', shortCut: string) => {
    if (config.search) globalShortcut.unregister(config.search)
    config.search = shortCut

    switch (type) {
      case 'search':
        return registerSearchShortCut(shortCut, win)
    }
  })

  function registerSearchShortCut(shortCut: string, win: BrowserWindow) {
    const ret = globalShortcut.register(shortCut, () => {
      // 快捷键显示隐藏
      win.isVisible() ? win.hide() : win.show()
    })

    return ret
  }

  app.on('will-quit', () => {
    // 注销快捷键
    globalShortcut.unregister('CommandOrControl+X')

    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
