import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SectionIntro from "../../components/home/SectionIntro.jsx";
import { CV_URL } from "../../lib/socials";

describe("SectionIntroComponent", () => {
  it("Should open the CV link when CV button is clicked", () => {
    render(<SectionIntro />);
    const cv_link = screen.getByText(/Check My CV/i);
    expect(cv_link.href).toBe(CV_URL);
  });
});
