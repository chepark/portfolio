import React from "react";
import { render, screen } from "@testing-library/react";
import SectionSkills from "../../components/home/SectionSkills";
import skills from "../../__mocks__/skills";
import { act } from "react-dom/test-utils";

describe("SectionSkills", () => {
  it("Should render skills", () => {
    render(<SectionSkills />);
    const skillItem = screen.getAllByTestId("skill");
    expect(skillItem).toHaveLength(13);
  });
});
