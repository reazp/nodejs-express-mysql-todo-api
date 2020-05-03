module.exports = (app) => {
  const tasks = require("../controllers/task.controller.js");

  // Create a new Task
  app.post("/tasks", tasks.create);

  // Retrieve all Tasks
  app.get("/tasks", tasks.findAll);

  // Retrieve a single Task with taskId
  app.get("/tasks/:taskId", tasks.findOne);

  // Update a task with taskId
  app.put("/tasks/:taskId", tasks.update);

  // Delete a task with taskId
  app.delete("/tasks/:taskId", tasks.delete);

  // Create a new task
  app.delete("/tasks", tasks.deleteAll);
};
