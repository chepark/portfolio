import { render, screen } from '@testing-library/react';
import SideNavigation from '../components/sections/SideNavigation';
import { socialData } from '../data/Socials';

const navigationTexts = ['Home', 'Projects', 'Blog', 'Github', 'CV'];

describe('SideNavigation Component', () => {
  it('should render navigation links', () => {
    render(<SideNavigation />);
    setTimeout(() => {
      navigationTexts.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    }, 1400);
  });

  it('should render social links', () => {
    render(<SideNavigation />);
    setTimeout(() => {
      expect(screen.getAllByRole('social-link')).toHaveLength(
        socialData.length
      );
    }, 2000);
  });
});
