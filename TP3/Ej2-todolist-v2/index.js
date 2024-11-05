const { TaskController } = require('./src/taskController');
const { showMainMenu } = require('./src/taskMenus');

const taskController = new TaskController();
showMainMenu(taskController);
