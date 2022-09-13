import Head from "next/head";
import PageHeader from "../../components/pageHeader/PageHeader";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog — Cheah Park</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <PageHeader
          title="Blog"
          subTitle="My thoughts and learning into writings, colors, and diagrams."
        />
      </main>
    </div>
  );
};

export default Blog;
