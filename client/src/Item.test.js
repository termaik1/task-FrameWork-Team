import React from "react";

import { create } from "react-test-renderer";

import Item from "./Item";

describe("Item component", () => {
  let props;
  beforeEach(() => {
    props = {
      _id: 1,
      name: "Test1",
      completed: true,
    };
  });

  it("check transmission props", () => {
    const component = create(<Item {...props} />);

    const root = component.root;
    const rootComponent = root.findByProps(props);

    expect(rootComponent.props).toEqual(props);
  });
});
