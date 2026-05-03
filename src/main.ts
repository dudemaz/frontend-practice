import { uihandlers } from './utils/ui/uihelper.js';

function init() {
  try {
    uihandlers();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to initialize application: ' + error.message);
    }
  }
}
init();
