import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export function PostCard({ slug, title, date, excerpt }: BlogPost) {
  return (
    <article className="group rounded-lg border p-6 transition-shadow hover:shadow-lg">
      <time className="text-sm text-muted-foreground">
        {new Date(date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </time>
      <h3 className="mt-2 text-xl font-bold group-hover:text-[#00FF85]">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="mt-4 inline-block text-sm font-medium text-[#00FF85] hover:underline"
      >
        Read More &rarr;
      </Link>
    </article>
  );
}
