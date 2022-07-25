/* eslint-env jest */

import React from "react";

import { render } from "testing-utils";

import { HvImageCarousel } from "../..";

import { Main } from "../stories/ImageCarousel.stories";

describe("ImageCarousel", () => {
  describe("sample snapshot testing", () => {
    it("Main", () => {
      const { container } = render(<Main />);
      expect(container).toMatchSnapshot();
    });
  });

  describe("general", () => {
    it("renders the component as expected", () => {
      const { getByText } = render(<HvImageCarousel />);

      const container = getByText("ImageCarousel");

      expect(container).toBeInTheDocument();
    });
  });
});
