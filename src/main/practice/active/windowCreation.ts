import { is } from '@electron-toolkit/utils';
import { BrowserWindow, screen } from 'electron';
import { join } from 'path';
import { windowInstanceRegistry } from '../../../shared/windowRegistries/windowInstanceRegistry';
import { createWindow } from '../../../utils/window/windowCreator';
import appIconURL from '/resources/octopus-teal.png?asset';

const activePracticePracticeWindowSourceLoader = (win: BrowserWindow) => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + "/activePractice/index.html");
  } else {
    win.loadFile(join(__dirname, '../renderer/activePractice/index.html'));
  }
};

export const createActivePracticeWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const winRegistryInstance = windowInstanceRegistry.get("activePractice")!;

  const win = createWindow({
    windowSettings: {
      height: 90,
      width: 300,
      x: width - 310, // 10px - screen edge margin
      y: height / 2 - 45,
      show: false,
      frame: false,
      skipTaskbar: true,
      resizable: false,
      icon: appIconURL,
      webPreferences: {
        preload: join(__dirname, '../preload/activePracticeWindow/main.js'),
        sandbox: false,
        devTools: is.dev,
      }
    },
    sourceLoader: activePracticePracticeWindowSourceLoader,
    listeners: [
      {
        event: 'ready-to-show',
        handlers: [
          () => winRegistryInstance.getWin()!.show(),
          () => winRegistryInstance.onOpen(),
        ]
      },
      {
        event: 'closed',
        handlers: [
          () => winRegistryInstance.onClose(),
        ]
      },
    ]
  });

  winRegistryInstance.setWin(win);
};
