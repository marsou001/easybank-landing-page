import {
  fireEvent,
  getAllByRole,
  getByRole,
  render,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import AppBar from "./AppBar";
import links from "./listItems";

describe("AppBar", () => {
  beforeEach(() => {
    render(<AppBar />);
  });

  it("renders", () => {
    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
  });

  it("renders logo", () => {
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders menu button", () => {
    const menuButton = screen.getByTestId("menu");
    expect(menuButton).toBeInTheDocument();
  });

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
    expect(listItems.length).toBe(5);

    listItems.forEach((listItem, index) => {
      expect(listItem).toBeInTheDocument();
      expect(listItem).toHaveTextContent(links[index]);
    });
  });

  it("renders call to action button", () => {
    const callToActionButton = screen.getByText("Request Invite");
    expect(callToActionButton).toBeInTheDocument();
  });
});

describe("Dialog", () => {
  beforeEach(() => {
    render(<AppBar />);

    const dialogModalControl = screen.getByTestId("menu");
    fireEvent.click(dialogModalControl);
  });

  it("renders on menu click", () => {
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });

  it("unrenders on menu click", () => {
    const dialog = screen.getByRole("dialog");
    const dialogModalControl = screen.getByTestId("menu");

    fireEvent.click(dialogModalControl);
    expect(dialog).not.toBeInTheDocument();
  });

  it("renders navigation", () => {
    const dialog = screen.getByRole("dialog");
    const nav = getByRole(dialog, "navigation");

    expect(nav).toBeInTheDocument();
  });

  it("renders list", () => {
    const dialog = screen.getByRole("dialog");
    const list = getByRole(dialog, "list");

    expect(list).toBeInTheDocument();
  });

  it("renders list items", () => {
    const dialog = screen.getByRole("dialog");

    const listItems = getAllByRole(dialog, "listitem");
    expect(listItems.length).toBe(5);

    const listItemLinks = getAllByRole(dialog, "link");
    expect(listItemLinks.length).toBe(5);

    listItems.forEach((listItem, index) => {
      expect(listItem).toBeInTheDocument();
      expect(listItem).toContainElement(listItemLinks[index]);
      expect(listItemLinks[index]).toHaveTextContent(links[index]);
    });
  });
});

describe("Accessibility", () => {
  beforeEach(() => {
    render(<AppBar />);
  });

  it("renders and unrenders on pressing Enter key on menu", () => {
    const dialogModalControl = screen.getByTestId("menu");
    fireEvent.keyDown(dialogModalControl, { code: "Enter" });

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();

    fireEvent.keyDown(dialogModalControl, { code: "Enter" });
    expect(dialog).not.toBeInTheDocument();
  });

  it("unrenders on pressing Escape key", async () => {
    const dialogModalControl = screen.getByTestId("menu");
    fireEvent.keyDown(dialogModalControl, { code: "Enter" });

    const dialog = screen.getByRole("dialog");

    fireEvent.keyDown(dialogModalControl, { code: "Escape" });
    expect(dialog).not.toBeInTheDocument();
  });

  it("closes on pressing Escape key on list items", () => {
    const dialogModalControl = screen.getByTestId("menu");
    fireEvent.keyDown(dialogModalControl, { code: "Enter" });

    const dialog = screen.getByRole("dialog");
    const listItemsLinks = getAllByRole(dialog, "link");

    fireEvent.focus(listItemsLinks[2]);
    fireEvent.keyDown(listItemsLinks[2], { code: "Escape" });

    expect(dialog).not.toBeInTheDocument();
    expect(dialogModalControl).toHaveFocus();
  });

  it("traps focus within list items links", () => {
    const dialogModalControl = screen.getByTestId("menu");
    fireEvent.keyDown(dialogModalControl, { code: "Enter" });

    const dialog = screen.getByRole("dialog");
    const listItemsLinks = getAllByRole(dialog, "link");
    fireEvent.focus(listItemsLinks[4]);

    fireEvent.keyDown(listItemsLinks[4], { code: "Tab" });
    expect(listItemsLinks[0]).toHaveFocus();

    fireEvent.keyDown(listItemsLinks[0], { code: "Tab", shiftKey: true });
    expect(listItemsLinks[4]).toHaveFocus();
  });
});
