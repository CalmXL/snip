import { BrowserWindow } from 'electron'
import { createWindow } from './window'

let win = null as null | BrowserWindow
export const createConfigWindow = () => {
  if (!win) win = createWindow()
  // 监听窗口关闭事件
  win.on('closed', () => {
    win = null
  })
}
