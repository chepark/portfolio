import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SectionIntro from "../../components/home/SectionIntro.jsx";
import { CV_URL } from "../../lib/socials";

describe("SectionIntroComponent", () => {
  it("Should open the CV link when CV button is clicked", () => {
    render(<SectionIntro />);
    const cvButtonElement = screen.getByText("Check My CV");
    fireEvent.click(cvButtonElement);
    window.open = jest.fn();
    expect(window.open).toBeCalled();
  });
});
