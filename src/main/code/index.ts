import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'
import { registerIpc } from './ipc'
import { registerShortCut } from './shortCut'

app.whenReady().then(() => {
  const win = createWindow()
  registerIpc(win)
  registerShortCut(win)
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
