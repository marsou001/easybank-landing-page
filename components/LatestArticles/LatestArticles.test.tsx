import { getByRole, getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LatestArticles from "./LatestArticles";
import { articles as data } from "./text";

describe("Latest Articles", () => {
  beforeEach(() => {
    render(<LatestArticles />);
  });

  it("renders main title", () => {
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Latest Articles");
  });

  it("renders articles", () => {
    const articles = screen.getAllByTestId("article");
    expect(articles.length).toBe(4);

    articles.forEach((article, index) => {
      expect(article).toBeInTheDocument();

      const image = getByRole(article, "img");
      expect(article).toContainElement(image);

      const author = getByText(article, 'By ' + data[index].author);
      expect(article).toContainElement(author);

      const title = getByText(article, data[index].title);
      expect(article).toContainElement(title);

      const excerpt = getByText(article, data[index].excerpt);
      expect(article).toContainElement(excerpt);
    })
  })
});
