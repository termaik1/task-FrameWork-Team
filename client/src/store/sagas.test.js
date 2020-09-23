import { all, takeEvery } from "redux-saga/effects";

import todoSagas, { get, create, edit, deleted } from "./sagas";
import types from "./constants";

describe("Test sagas in Todo", () => {
  const generator = todoSagas();

  it("test to equal get, create, edit, delete", () => {
    expect(generator.next().value).toEqual(
      all([
        takeEvery(types.GET, get),
        takeEvery(types.CREATE, create),
        takeEvery(types.EDIT, edit),
        takeEvery(types.DELETE, deleted),
      ])
    );
  });
});
