# SaaS Starter Kit

A production-ready SaaS starter kit built with Next.js 14, Supabase, and TypeScript. Launch your next project in minutes, not months.

## Features

- **Authentication** - Complete auth system with email/password, email verification, and password reset
- **User Management** - Profile editing, avatar upload, password change, and account deletion
- **Protected Routes** - Middleware-based route protection with redirect handling
- **Modern Dashboard** - Beautiful dashboard with stats, activity feed, and quick actions
- **Marketing Pages** - Landing page, about, and pricing pages ready to customize
- **Dark Mode** - Full dark mode support with system preference detection
- **Type Safety** - Strict TypeScript throughout with no `any` types
- **Form Validation** - Zod schemas with React Hook Form for robust validation
- **Data Fetching** - TanStack Query for efficient caching and data management
- **Beautiful UI** - Tailwind CSS with shadcn/ui components

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Backend**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Testing**: [Vitest](https://vitest.dev/) + Testing Library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd saas-starter-kit
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings > API** and copy:
   - Project URL
   - anon/public key

3. Create `.env.local` from the example:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set Up the Database

Run the SQL migration in your Supabase SQL Editor:

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `supabase/migrations/001_create_profiles.sql`
3. Run the query

This will:
- Create the `profiles` table
- Set up Row Level Security policies
- Create automatic profile creation on signup
- Set up the `avatars` storage bucket

### 5. Configure Authentication

1. Go to **Authentication > Providers** in Supabase
2. Ensure Email provider is enabled
3. Configure email templates if desired
4. Update the Site URL to `http://localhost:3000`
5. Add `http://localhost:3000/auth/callback` to Redirect URLs

### 6. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
├── app/
│   ├── (auth)/              # Auth pages (login, signup, reset-password)
│   ├── (marketing)/         # Marketing pages (landing, about, pricing)
│   ├── api/                  # API routes
│   ├── auth/callback/        # Auth callback handler
│   ├── dashboard/            # Protected dashboard pages
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── providers.tsx         # Client providers (Query, Theme)
├── components/
│   ├── auth/                 # Auth-related components
│   ├── dashboard/            # Dashboard components
│   ├── marketing/            # Marketing page components
│   └── ui/                   # shadcn/ui components
├── hooks/                    # Custom React hooks
├── lib/
│   ├── supabase/             # Supabase client configuration
│   ├── utils/                # Utility functions
│   └── validations/          # Zod schemas
├── types/                    # TypeScript type definitions
├── public/                   # Static assets
└── supabase/
    └── migrations/           # SQL migrations
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | Yes |
| `NEXT_PUBLIC_APP_URL` | Your application URL | Yes |

## Customization

### Branding

1. Update the logo/name in `components/marketing/header.tsx`
2. Update metadata in `app/layout.tsx`
3. Update footer links in `components/marketing/footer.tsx`

### Styling

- Modify colors in `app/globals.css` (CSS variables)
- Update `tailwind.config.ts` for theme customization

### Features

The starter includes placeholders for:
- Dashboard stats (replace with real data)
- Recent activity (connect to your activity tracking)
- Quick actions (customize for your use case)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [Render](https://render.com)
- Self-hosted with Docker

## Security Considerations

- All database operations use Row Level Security (RLS)
- Passwords require minimum 8 characters with complexity requirements
- Session management handled by Supabase Auth
- CSRF protection built into Next.js
- Environment variables never exposed to client (except `NEXT_PUBLIC_*`)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## License

MIT License - feel free to use this for personal or commercial projects.
