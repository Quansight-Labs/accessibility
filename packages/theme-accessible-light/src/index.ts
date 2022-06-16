import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
  } from '@jupyterlab/application';
  
  import { IThemeManager } from '@jupyterlab/apputils';
  
  /**
   * Initialization data for the stylish extension.
   */
  const plugin: JupyterFrontEndPlugin<void> = {
    id: 'stylish:plugin',
    autoStart: true,
    requires: [IThemeManager],
    activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
      console.log('JupyterLab extension accessible-light is activated!');
      const style = 'stylish/index.css';
  
      manager.register({
        name: 'accessible-light',
        isLight: true,
        load: () => manager.loadCSS(style),
        unload: () => Promise.resolve(undefined)
      });
    }
  };
  
  export default plugin;
  