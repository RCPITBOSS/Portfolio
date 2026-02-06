import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/post-card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on development, learning, and building.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="container py-20">
        <h1 className="text-5xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thoughts on development, learning, and building
        </p>
      </section>

      <section className="container pb-20">
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        )}
      </section>
    </>
  );
}
