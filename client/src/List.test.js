import React from "react";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { create } from "react-test-renderer";

import List from "./List";

configure({ adapter: new Adapter() });
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn,
}));

describe("List component", () => {
  let props;
  beforeEach(() => {
    props = {
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

  it("Transfer check props", () => {
    const component = create(<List {...props} />);
    const root = component.root;

    const rootComponent = root.findByProps(props);

    expect(rootComponent.props).toEqual(props);
  });
});
