import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('PageHeader component', () => {
  it('renders with title and subtitle on a page other than root', () => {
    // Mock usePathname to simulate being on a page other than root
    const mockUsePathname = jest.spyOn(
      require('next/navigation'),
      'usePathname'
    );
    mockUsePathname.mockReturnValue('/example-page');

    const { getByText } = render(
      <PageHeader title='Page Title' subTitle='Page Subtitle' />
    );

    // Assert that the title and subtitle are rendered
    expect(getByText('Page Title')).toBeInTheDocument();
    expect(getByText('Page Subtitle')).toBeInTheDocument();
  });

  it('renders with title only when on the root page', () => {
    // Mock usePathname to simulate being on the root page
    const mockUsePathname = jest.spyOn(
      require('next/navigation'),
      'usePathname'
    );
    mockUsePathname.mockReturnValue('');

    const { getByText } = render(
      <PageHeader title='Page Title' subTitle='Page Subtitle' />
    );

    expect(getByText('Page Title')).toBeInTheDocument();
  });
});
