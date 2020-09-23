import mongoose from "mongoose";

export default () =>
  mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.cqaze.mongodb.net/Todo?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true }
  );