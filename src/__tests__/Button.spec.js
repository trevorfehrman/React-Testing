import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<Button />, div);
	});

	it("calls click handler", () => {
		const mock = jest.fn();
		const wrapper = shallow(<Button clickHandler={mock} />);
		wrapper.find("button").simulate("click");
		wrapper.find("button").simulate("click");
		wrapper.find("button").simulate("click");
		expect(mock).toHaveBeenCalledTimes(3);
	});

	it("calls handler with props", () => {
		const mock = jest.fn();
		const wrapper = shallow(<Button name="Name" clickHandler={mock} />);
		wrapper.find("button").simulate("click");
		expect(mock).toHaveBeenCalledWith("Name");
	});
});
