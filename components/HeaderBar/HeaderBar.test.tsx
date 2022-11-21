import { beforeEach, describe, it } from "node:test";
import { render, screen } from '@testing-library/react';
import HeaderBar from "./HeaderBar";
import links from "./listItems";

describe("HeaderBar", () => {
  beforeEach(() => {
    render(<HeaderBar />);
  })

  it("renders", () => {
    const headerBar = screen.getByRole("banner");
    expect(headerBar).toBeInTheDocument();
  });

  it("renders logo", () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it("renders menu button", () => {
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();
  });

  test("Navigation links", () => {
    it("renders navigation", () => {
      const nav = screen.getByRole("navigation");
      expect(nav).toBeInTheDocument();
    });

    it("renders list", () => {
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });

    it("renders list items", () => {
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toBe(5);

      listItems.forEach((listItem, index) => {
        expect(listItem).toBeInTheDocument();
        expect(listItem).toHaveTextContent(links[index]);
      });
    });
  }); 
})