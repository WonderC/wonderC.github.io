import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-8 max-w-4xl">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 text-sm text-[#569cd6] hover:underline mb-6"
      >
        <ArrowLeft size={14} />
        返回项目列表
      </Link>

      <article>
        <header className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold text-[#d4d4d4]">
              {project.title}
            </h1>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#252526] border border-[#3c3c3c] text-[#d4d4d4] rounded hover:bg-[#2a2d2e] transition-colors text-sm"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#0e639c] text-white rounded hover:bg-[#1177bb] transition-colors text-sm"
                >
                  <ExternalLink size={16} />
                  在线演示
                </a>
              )}
            </div>
          </div>

          <p className="text-lg text-[#858585] mb-4">{project.description}</p>

          <div className="flex items-center gap-4 text-sm text-[#858585]">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {project.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {project.tags.join(", ")}
            </span>
          </div>
        </header>

        <div className="prose prose-invert prose-pre:bg-[#252526] prose-pre:border prose-pre:border-[#3c3c3c] max-w-none">
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </article>
    </div>
  );
}
