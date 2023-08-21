import { is } from '@electron-toolkit/utils';
import { BrowserWindow } from 'electron';

type WindowEvents = "ready-to-show" | "closed" | "show" | "blur";

type CreateWindowConfig = {
  windowSettings: Electron.BrowserWindowConstructorOptions;
  listeners: { event: WindowEvents, handlers: Function[]; }[];
  sourceLoader: (win: BrowserWindow) => void;
};

export const createWindow = (config: CreateWindowConfig) => {
  const win = new BrowserWindow(config.windowSettings);
  
  win.setMenu(null);

  if (is.dev) {
    setTimeout(() => {
      win.webContents.openDevTools();
    }, 1000);
  }

  config.listeners.forEach(({ event, handlers }) => {
    handlers.forEach((handler) => {
      // @ts-ignore
      win.on(event, handler);
    });
  });

  config.sourceLoader(win);

  return win;
};
