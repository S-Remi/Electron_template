const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let main_window = null;
app.on('ready', () => {
// window作成
main_window = new BrowserWindow({
        width:  640,
        height: 480,
        webPreferences: {
            nodeIntegration: false,
        }
    });
    
    // 表示ファイル
    main_window.loadURL('file://' + __dirname + '/root/index.html');
    
    // デベロッパーツール表示
    // main_window.webContents.openDevTools();
    
    // メニューバー非表示
    main_window.setMenu(null);
    
    // window終了時処理
    main_window.on('closed', function() {
    main_window = null;
    });
});
