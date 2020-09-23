import { all, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import _ from "lodash";

import actions from "./actions";
import types from "./constants";

import "regenerator-runtime/runtime";

axios.defaults.baseURL = `http://localhost:5050`;

export function* get() {
  try {
    const todos = yield axios.get("/todos");

    yield put(actions.getSuccess(todos.data));
  } catch (err) {
    console.log("ERR", err);
    yield put(actions.getFailure());
  }
}

export function* create(action) {
  try {
    const data = action.payload;

    const createTodo = yield axios.post("/create", data);

    yield put(actions.createSuccess(createTodo.data));
  } catch (err) {
    console.log("ERR", err);
    yield put(actions.createFailure());
  }
}

export function* edit(action) {
  try {
    const data = action.payload;
    const editTodo = yield axios.patch("/edit", data);

    yield put(actions.editSuccess(editTodo.data));
    if (!!_.size(editTodo.data)) {
      yield put(actions.get());
    }
  } catch (err) {
    console.log("ERR", err);
    yield put(actions.editFailure());
  }
}

export function* deleted(action) {
  try {
    const todoId = action.payload;
    const deleteTodo = yield axios.delete(`/delete/${todoId}`);

    yield put(actions.deleteSuccess(deleteTodo.data));
  } catch (err) {
    console.log("ERR", err);

    yield put(actions.deleteFailure());
  }
}

export default function* todoSagas() {
  yield all([
    takeEvery(types.GET, get),
    takeEvery(types.CREATE, create),
    takeEvery(types.EDIT, edit),
    takeEvery(types.DELETE, deleted),
  ]);
}
