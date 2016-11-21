'use strict'

const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native menus.
const Menu = electron.Menu
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')

let mainWindow

let createWindow = () => {
  mainWindow = new BrowserWindow({width: 1200, height: 600})
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => { mainWindow = null })

  let menu = Menu.buildFromTemplate([])
  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

