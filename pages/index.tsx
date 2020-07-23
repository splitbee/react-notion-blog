import Link from "next/link";

const NOTION_BLOG_ID =
  process.env.NOTION_BLOG_ID || "1099525da7e5405c961706de56622ccd";

export type Post = { id: string; slug: string; title: string; date: string };

export const getAllPosts = async (): Promise<Post[]> => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }: { posts: Post[] }) {
  return (
    <div className="content">
      <h1>Posts</h1>
      <div>
        {posts.map((post) => (
          <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
            <a>
              <b>{post.title}</b>
              <div className="sub">posted on {post.date}</div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
