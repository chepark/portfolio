import { render, screen } from '@testing-library/react';
import PostList from '../../components/sections/PostList';
import { getAllPosts } from '../../lib/posts';

// Mock the formatDate function
jest.mock('../../lib/formatDate', () => ({
  __esModule: true,
  default: jest.fn(() => 'Mocked Date'),
}));

describe('PostList component', () => {
  it('should render a list of posts', () => {
    const postsMeta = [
      { id: 1, slug: 'post-1', title: 'Post 1', date: '2023-09-01' },
      { id: 2, slug: 'post-2', title: 'Post 2', date: '2023-09-02' },
    ];

    render(<PostList postsMeta={postsMeta} />);

    const postElements = screen.getAllByRole('listitem');
    expect(postElements.length).toBe(2);

    const postTitles = screen.getAllByText(/Post \d/);
    expect(postTitles.length).toBe(2);

    const postDates = screen.getAllByText('Mocked Date');
    expect(postDates.length).toBe(2);
  });

  it('should render no posts when the postsMeta array is empty', () => {
    const postsMeta = [];

    render(<PostList postsMeta={postsMeta} />);

    const postElements = screen.queryAllByRole('listitem');
    expect(postElements.length).toBe(0);
  });
});
