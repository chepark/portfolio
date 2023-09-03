import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../../components/sections/Skills';

describe('SectionSkills', () => {
  it('Should render 13 skills', () => {
    render(<Skills />);
    const skillItem = screen.getAllByTestId('skill');
    expect(skillItem).toHaveLength(13);
  });
});
