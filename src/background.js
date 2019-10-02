'use strict'

import {
	app,
	protocol,
	BrowserWindow,
	ipcMain
} from 'electron'
const ipc = ipcMain
const electron = require('electron')
const Menu = electron.Menu
Menu.setApplicationMenu(null)

import {
	createProtocol,
	installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
const isDevelopment = process.env.NODE_ENV !== 'production'



let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{
	scheme: 'app',
	privileges: {
		secure: true,
		standard: true
	}
}])

function createWindow() {
	// Create the browser window.
	// webSecurity 关闭web端跨域安全
	win = new BrowserWindow({
		width: 800,
		height: 600,
		frame: false,
		webSecurity: false,
		webPreferences: {
			nodeIntegration: true
		}
	})

	if (process.env.WEBPACK_DEV_SERVER_URL) {
		win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
		if (!process.env.IS_TEST) win.webContents.openDevTools()
	} else {
		createProtocol('app')
		win.loadURL('app://./index.html')
	}

	//最小化窗口
	ipc.on('min', function () {
		win.minimize();
	})
	//关闭窗口
	ipc.on('close', function () {
		win.close();
	})
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow()
	}
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
	if (isDevelopment && !process.env.IS_TEST) {


	}
	createWindow()
})

if (isDevelopment) {
	if (process.platform === 'win32') {
		process.on('message', data => {
			if (data === 'graceful-exit') {
				app.quit()
			}
		})
	} else {
		process.on('SIGTERM', () => {
			app.quit()
		})
	}
}