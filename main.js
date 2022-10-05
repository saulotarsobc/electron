const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'js', 'preload.js'),
			nodeIntegration: true,
		}
	});
	mainWindow.loadFile('index.html');
	// mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});
