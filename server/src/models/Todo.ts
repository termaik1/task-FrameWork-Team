import { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  _id: string;
  name: string;
  completed: boolean;
}

const TodoSchema = new Schema({
  name: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = model<ITodo>("Todo", TodoSchema);

export default TodoModel;
