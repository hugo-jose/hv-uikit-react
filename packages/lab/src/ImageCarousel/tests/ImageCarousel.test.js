/* eslint-env jest */

import React from "react";

import { render, screen } from "testing-utils";


import { Main } from "../stories/ImageCarousel.stories";

describe("<HvImageCarousel>", () => {
  describe("sample snapshot testing", () => {
    it("Main", () => {
      const { container } = render(<Main />);
      expect(container).toMatchSnapshot();
    });
  });

  describe("general structure", () => {
    it("renders the image carousel as expected", () => {
      render(<Main />);
      const title = screen.getByText("Title");
      expect(title).toBeInTheDocument();
      const images = screen.getAllByRole("img");
      expect(images.length).toBe(10);
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(11);
      /* const numberImage = screen.getByHighlightText("1");
      expect(numberImage).toBeInTheDocument(); */
      const numberImages = screen.getByText("/9");
      expect(numberImages).toBeInTheDocument();
    });
  });
});
