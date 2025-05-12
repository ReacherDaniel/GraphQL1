const taskService = require('../services/taskService');

const taskResolver = {
  Query: {
    getTasks: () => taskService.getAllTasks(),
    getTask: (_, { id }) => taskService.getTaskById(id),
  },
  Mutation: {
    createTask: (_, { title, completed }) => taskService.createTask({ title, completed }),
    updateTask: (_, { id, title, completed }) => taskService.updateTask(id, { title, completed }),
    deleteTask: (_, { id }) => taskService.deleteTask(id),
  },
};

module.exports = taskResolver;
