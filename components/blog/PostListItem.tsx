import Link from "next/link";
import formatDate from "../../lib/formatDate";

const PostListItem = ({ meta }) => {
  const { title, date, slug, excerpt } = meta;

  return <>
    <Link href={`/blog/${slug}`} legacyBehavior>
      <div className="my-10 cursor-pointer hover:scale-[1.01] hover:duration-300 hover:ease-in-out">
        <div className="flex flex-col justify-between md:flex-row">
          <h3>{title}</h3>
          <div className="text-stone-500">{formatDate(date)}</div>
        </div>
        <div className="mt-3">{excerpt}</div>
      </div>
    </Link>
  </>;
};

export default PostListItem;
