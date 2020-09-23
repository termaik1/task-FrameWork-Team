import reducers from "./reducers";
import actions from "./actions";

describe("Test reducers in Todo", () => {
  let state;
  beforeEach(() => {
    state = {
      origin: [
        {
          _id: 1,
          name: "test1",
          completed: false,
        },
        {
          _id: 2,
          name: "test2",
          completed: true,
        },
      ],
    };
  });

  it("add items", () => {
    const data = [
      {
        _id: 1,
        name: "test1",
        completed: false,
      },
      {
        _id: 2,
        name: "test2",
        completed: true,
      },
    ];
    const action = actions.getSuccess(data);

    const newState = reducers({ origin: [] }, action);
    expect(newState.origin.length).toBe(2);
  });

  it("item addition", () => {
    const action = actions.createSuccess({
      _id: 3,
      name: "test3",
      completed: true,
    });

    const newState = reducers(state, action);
    expect(newState.origin.length).toBe(3);
  });

  it("item delete", () => {
    const action = actions.deleteSuccess({
      _id: 2,
      name: "test2",
      completed: true,
    });

    const newState = reducers(state, action);
    expect(newState.origin.length).toBe(1);
  });
});
