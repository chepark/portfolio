import { render, screen } from '@testing-library/react';
import Footer from '../../components/sections/Footer';

describe('Footer Component', () => {
  it('should render the footer', () => {
    render(<Footer />);
    expect(screen.getByText('Copyright', { exact: false })).toBeInTheDocument();
    expect(
      screen.getByText('Chaeah Park', { exact: false })
    ).toBeInTheDocument();
  });
});
