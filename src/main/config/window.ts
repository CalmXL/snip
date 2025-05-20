import { BrowserWindow, shell } from 'electron'
import { is } from '@electron-toolkit/utils'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import url from 'node:url'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  // const { width } = screen.getPrimaryDisplay().workAreaSize

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 550,
    alwaysOnTop: true,
    show: true,
    frame: true, // 关闭顶部菜单栏
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()

  })

  // 开启忽略点击事件
  // mainWindow.setIgnoreMouseEvents(true, { forward: true })
  // 开启调试工具
  mainWindow.webContents.openDevTools()
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
  } else {
    // mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    mainWindow.loadURL(
      url.format({
        //
        pathname: join(__dirname, '../renderer/index.html'),
        protocol: 'file',
        slashes: true,
        hash: 'config'
      })
    )
  }

  return mainWindow
}
