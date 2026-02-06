# Brian Greenbaum — Developer Portfolio

Personal portfolio and blog built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Blog**: Markdown files with [gray-matter](https://github.com/jonschlinkert/gray-matter) + [marked](https://marked.js.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  page.tsx              # Homepage
  projects/page.tsx     # Projects page
  blog/page.tsx         # Blog list
  blog/[slug]/page.tsx  # Individual blog post
  about/page.tsx        # About page
  layout.tsx            # Root layout (nav + footer)
components/
  ui/                   # shadcn/ui components
  layout/               # Nav, Footer
  projects/             # ProjectCard
  blog/                 # PostCard
content/
  blog/                 # Markdown blog posts
lib/
  blog.ts               # Blog utilities (read/parse markdown)
  utils/                # Helper functions
```

## Adding Blog Posts

Create a new `.md` file in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2026-02-05"
excerpt: "A short description of the post."
---

Your markdown content here.
```

The post will automatically appear on the blog page at `/blog/your-filename`.

## Adding Projects

Edit the `projects` array in `app/projects/page.tsx`:

```tsx
const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'What it does.',
    tech: ['Next.js', 'TypeScript'],
    image: 'https://placehold.co/1200x800/f5f5f5/6B7280?text=Project',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/RCPITBOSS/repo',
  },
];
```

To also feature a project on the homepage, update the `featuredProject` object in `app/page.tsx`.

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript checks
npm run format       # Prettier
```

## License

MIT
