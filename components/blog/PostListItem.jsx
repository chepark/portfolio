import Link from "next/link";

const PostListItem = ({ meta }) => {
  const { title, date, slug, excerpt } = meta;

  return (
    <>
      <Link href={`/blog/${slug}`}>
        <div className="my-10 cursor-pointer">
          <div className="flex flex-col justify-between md:flex-row">
            <h3>{title}</h3>
            <div className="text-stone-500">{date}</div>
          </div>
          <div className="mt-3">{excerpt}</div>
        </div>
      </Link>
    </>
  );
};

export default PostListItem;
