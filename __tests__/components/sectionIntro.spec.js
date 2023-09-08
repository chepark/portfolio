import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/sections/Hero.jsx';
import { CV_URL } from '../../data/socials.jsx';

describe('HeroComponent', () => {
  it('Should open the CV link when CV button is clicked', () => {
    render(<Hero />);
    const cv_link = screen.getByText(/Check My CV/i);
    expect(cv_link.href).toBe(CV_URL);
  });
});
