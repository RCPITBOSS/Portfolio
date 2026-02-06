---
title: "Building a Next.js SaaS Starter with Supabase"
date: "2026-02-05"
excerpt: "A deep dive into building a full-stack SaaS starter kit with Next.js 14, Supabase, and TypeScript — and what I learned along the way."
---

Starting a new SaaS project from scratch means solving the same problems every time: authentication, user profiles, protected routes, and a clean component architecture. I built a starter kit to solve this once and reuse it as a foundation for future projects.

## The Stack

The core stack is **Next.js 14** with the App Router, **TypeScript** for type safety, **Supabase** for auth and database, and **Tailwind CSS** with **shadcn/ui** for the component layer. Each piece was chosen for a reason — Next.js gives us server components and file-based routing, Supabase handles auth without the overhead of rolling your own, and shadcn/ui provides accessible, customizable primitives that don't lock you into a design system.

## What I Learned

The biggest takeaway was how well Supabase's Row Level Security works with Next.js middleware. By combining server-side session checks in middleware with RLS policies on the database, you get defense in depth — even if someone bypasses the frontend, the database enforces access rules. Setting up the auth callback flow for email verification and password resets required careful handling of redirect URLs and cookie management, but the `@supabase/ssr` package made the server-side cookie dance much simpler than doing it manually.

## Architecture Decisions

I used Next.js route groups to cleanly separate marketing pages, auth pages, and the dashboard. Each group gets its own layout — the marketing pages have a public header and footer, auth pages get a minimal centered layout, and the dashboard has a sidebar with protected navigation. This keeps the code organized and makes it easy to modify one section without touching the others.

## What's Next

The starter is now the foundation for this portfolio site. I stripped out the auth system and repurposed the clean component architecture for a static portfolio with a markdown-powered blog. That's the value of building reusable foundations — the same codebase adapts to completely different use cases.
