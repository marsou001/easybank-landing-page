import { getAllByRole, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppFooterInfo from "./AppFooterInfo";
import data from "./links";

describe("AppFooterInfo", () => {
  beforeEach(() => {
    render(<AppFooterInfo />);
  });

  it("renders logo", () => {
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  it("contains navigation links", () => {
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const listItems = getAllByRole(list, "listitem");
    expect(listItems.length).toBe(6);

    listItems.forEach((listItem, index) => {
      expect(listItem).toBeInTheDocument();

      const listItemLink = getByRole(listItem, "link");
      expect(listItemLink).toBeInTheDocument();
      expect(listItemLink).toHaveTextContent(data[index])
    });
  })

  it("renders social media links", () => {
    const facebookLink = screen.getByTitle("facebook-link");
    expect(facebookLink).toBeInTheDocument();

    const youtubeLink = screen.getByTitle("youtube-link");
    expect(youtubeLink ).toBeInTheDocument();

    const twitterLink = screen.getByTitle("twitter-link");
    expect(twitterLink).toBeInTheDocument();
    
    const pinterestLink = screen.getByTitle("pinterest-link");
    expect(pinterestLink).toBeInTheDocument();

    const instagramLink = screen.getByTitle("instagram-link");
    expect(instagramLink).toBeInTheDocument();
  })

  it("renders call to action button", () => {
    const callToActionButton = screen.getByRole("button");
    expect(callToActionButton).toBeInTheDocument();
    expect(callToActionButton).toHaveTextContent("Request Invite");
  })

  it("renders copyright notice", () => {
    const copyrightNotice = screen.getByText("© Easybank. All Rights Reserved");
    expect(copyrightNotice).toBeInTheDocument();
  })
});
