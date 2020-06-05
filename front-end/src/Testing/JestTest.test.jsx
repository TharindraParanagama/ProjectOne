import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "../Pages/HomePage";
import Content from "../components/content";
import Carousel from "../components/carousel-HomePage";

Enzyme.configure({ adapter: new Adapter() });

describe("Home Page", () => {
  const wrapper = shallow(<HomePage />);
  it("should contain a componenet named content", () => {
    const ContentComponent = wrapper.find("Content");
    expect(ContentComponent.length).toBe(1);
  });
});

describe("Content Component", () => {
  const footer = shallow(<Content />);
  it("content page to have a footer", () => {
    const foot = footer.find("footer");
    expect(foot.text()).toBe("George R.R. Martin");
  });
});

describe("Carousel", () => {
  const carousel = shallow(<Carousel />);
  it("check the number of image tags in the carousel of the home page", () => {
    const image = carousel.find("img");
    expect(image.length).toBe(3);
    expect(carousel.getElements()).toMatchSnapshot();
  });
});
