import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Features from "./Features";
import {
  features as data,
  paragraph as mainParagraph,
  title as mainTitle,
} from "./text";

describe("Features", () => {
  beforeEach(() => {
    render(<Features />);
  });

  it("Renders main title", () => {
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mainTitle);
  });

  it("Renders main paragraph", () => {
    const paragraph = screen.getByText(mainParagraph);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders features", () => {
    const features = screen.getAllByTestId("feature");
    expect(features.length).toBe(4);

    features.forEach((feature, index) => {
      expect(feature).toBeInTheDocument();

      const image = getByRole(feature, "img");
      expect(feature).toContainElement(image);

      const title = getByRole(feature, "heading", { level: 2 });
      expect(title).toHaveTextContent(data[index].title);
      expect(feature).toContainElement(title);

      const paragraph = getByText(feature, data[index].paragraph);
      expect(feature).toContainElement(paragraph);
    });
  });
});
