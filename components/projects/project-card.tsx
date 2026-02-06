import Image from 'next/image';
import { Button } from '@/components/ui';
import { ExternalLink, Github } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, tech, image, liveUrl, githubUrl }: Project) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveUrl && (
            <Button asChild className="bg-[#FAFF00] text-black hover:bg-[#FAFF00]/80">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" className="border-[#00FF85] text-foreground hover:bg-[#00FF85]/10">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
