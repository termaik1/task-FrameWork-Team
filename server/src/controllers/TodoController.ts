import express from "express";
import _ from "lodash";
import { getObjValue } from "./types";
import TodoModel from "../models/Todo";
import { ITodo } from "../models/Todo";

class TodoController {
  get = async (req: express.Request, res: express.Response) => {
    try {
      const todos: Array<ITodo> = await TodoModel.find();

      res.json(todos);
    } catch (err) {
      console.log("ERR", err);
      res.status(400).json({ message: "Error" });
    }
  };
  create = async (req: express.Request, res: express.Response) => {
    try {
      const name: string = getObjValue(req.body, "name");

      const todoCreate = new TodoModel({ name });
      const todo = await todoCreate.save();
      res.json(todo);
    } catch (err) {
      console.log("ERR", err);
      res.status(400).json({ message: "Error" });
    }
  };
  patch = async (req: express.Request, res: express.Response) => {
    try {
      const _id: string = getObjValue(req.body, "_id");
      const name: string = getObjValue(req.body, "name");
      const completed: boolean = getObjValue(req.body, "completed");

      const todo: ITodo = await TodoModel.findOneAndUpdate(
        { _id },
        { name, completed },
        {
          new: true,
          upsert: true,
        }
      );

      res.json(todo);
    } catch (err) {
      console.log("ERR", err);
      res.status(400).json({ message: "Error" });
    }
  };
  delete = async (req: express.Request, res: express.Response) => {
    try {
      const _id: string = getObjValue(req.params, "id");

      const todoDelete = await TodoModel.findByIdAndRemove({ _id });

      res.json(todoDelete);
    } catch (err) {
      console.log("ERR", err);
      res.status(400).json({ message: "Error" });
    }
  };
}

export default TodoController;
