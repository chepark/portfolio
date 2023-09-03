import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionSkills from '../../components/sections/Skills';

describe('SectionSkills', () => {
  it('Should render 13 skills', () => {
    render(<SectionSkills />);
    const skillItem = screen.getAllByTestId('skill');
    expect(skillItem).toHaveLength(13);
  });
});
