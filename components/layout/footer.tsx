import { Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@briangreenbaum.dev"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00FF85]"
          >
            <Mail className="h-4 w-4" />
            hello@briangreenbaum.dev
          </a>
          <a
            href="https://github.com/RCPITBOSS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#00FF85]"
          >
            <Github className="h-4 w-4" />
            github.com/RCPITBOSS
          </a>
        </div>
        <p className="text-sm text-muted-foreground">&copy; 2026 Brian Greenbaum</p>
      </div>
    </footer>
  );
}
