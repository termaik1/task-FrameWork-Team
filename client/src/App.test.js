import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
configure({ adapter: new Adapter() });
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn,
  useDispatch: jest.fn,
}));

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("checking the rendering of all blocks <div>", () => {
    const divAll = component.find("div");
    const divOne = component.find(".app");
    const divTwo = component.find(".app__container");
    const divThree = component.find(".app__container-panel");
    const divFour = component.find(".app__container-content");

    expect(divAll).toHaveLength(4);
    expect(divOne).toHaveLength(1);
    expect(divTwo).toHaveLength(1);
    expect(divThree).toHaveLength(1);
    expect(divFour).toHaveLength(1);
  });

  it("checking rendering of <TextField> from library 'material-ui' by its #id", () => {
    const textFieldId = component.find("#outlined-required");

    expect(textFieldId).toHaveLength(1);
  });
  it("checking rendering of <Button> from library 'material-ui' by its #id", () => {
    const buttonId = component.find("#button-material");
    const buttonText = buttonId.text();
    expect(buttonId).toHaveLength(1);
    expect(buttonText).toBe("ADD");
  });
  it("Check the rendering of a custom component <List>", () => {
    const list = component.find("List");

    expect(list).toHaveLength(1);
  });
});
