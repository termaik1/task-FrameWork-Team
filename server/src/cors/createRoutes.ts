import TodoController from "../controllers/TodoController";

export default (app: any) => {
  const Todo = new TodoController();

  app.get("/todos", Todo.get);
  app.post("/create", Todo.create);
  app.patch("/edit", Todo.patch);
  app.delete("/delete/:id", Todo.delete);
};
