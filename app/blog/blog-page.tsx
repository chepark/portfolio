import PostList from '../../components/blog/PostList';
import PageHeader from '../../components/pageHeader/PageHeader';

export default function BlogPage({ posts }) {
  return (
    <div>
      <div>
        <PageHeader
          title='Blog'
          subTitle='My thoughts and learning into writings, colors, and diagrams.'
        />
        <PostList posts={posts} />
      </div>
    </div>
  );
}
