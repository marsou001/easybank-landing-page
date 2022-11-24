import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "./Hero";

describe("Hero", () => {
  beforeEach(() => {
    render(<Hero />);
  })

  it("renders illustrations", () => {
    const illustrations = screen.getAllByRole("img");
    expect(illustrations.length).toBe(3);

    illustrations.forEach((illustration) => expect(illustration).toBeInTheDocument());
  });

  it("renders title", () => {
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Next generation digital banking");
  })

  it("renders paragraph", () => {
    const title = screen.getByText("Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.");
    expect(title).toBeInTheDocument();
  })

  it("renders call to action button", () => {
    const callToActionButton = screen.getByRole("button");
    expect(callToActionButton).toBeInTheDocument();
    expect(callToActionButton).toHaveTextContent("Request Invite");
  })
});