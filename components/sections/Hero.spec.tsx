import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

// Mock external data
jest.mock('../../data/Socials', () => ({
  CV_URL: 'https://example.com/cv.pdf',
}));

// Mock the next/image component to prevent errors during testing
jest.mock('next/legacy/image', () => {
  // eslint-disable-next-line
  const MockedImage = ({ src, alt }) => <img src={src} alt={alt} />;
  MockedImage.displayName = 'Image';
  return MockedImage;
});

describe('Hero component', () => {
  it('renders with correct content and CV link', () => {
    render(<Hero />);

    // TODO: Assert that the hero content is rendered

    // Assert that the CV button is rendered with the correct link
    const cvButton = screen.getByText('Check My CV');
    expect(cvButton).toBeInTheDocument();
    expect(cvButton.closest('a')).toHaveAttribute(
      'href',
      'https://example.com/cv.pdf'
    );
  });

  it('renders the profile image', () => {
    render(<Hero />);

    // Assert that the profile image is rendered with the correct alt text
    const profileImage = screen.getByAltText(
      'Chaeah Park, author of the website'
    );
    expect(profileImage).toBeInTheDocument();
  });
});
