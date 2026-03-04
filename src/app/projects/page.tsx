import Link from "next/link";
import { getProjects } from "@/lib/content";
import { Briefcase, ExternalLink, Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#d4d4d4] mb-2">项目</h1>
        <p className="text-[#858585]">我的开源项目和个人作品</p>
      </div>

      <div className="grid gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <article
              key={project.slug}
              className="p-6 border border-[#3c3c3c] rounded hover:bg-[#252526] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <Link href={`/projects/${project.slug}`}>
                  <h2 className="text-xl font-semibold text-[#569cd6] hover:underline">
                    {project.title}
                  </h2>
                </Link>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#858585] hover:text-[#d4d4d4] hover:bg-[#3c3c3c] rounded transition-colors"
                      title="GitHub"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#858585] hover:text-[#d4d4d4] hover:bg-[#3c3c3c] rounded transition-colors"
                      title="在线演示"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[#858585] mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-[#264f78] text-[#4ec9b0] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-12">
            <Briefcase size={48} className="mx-auto text-[#3c3c3c] mb-4" />
            <p className="text-[#858585]">暂无项目</p>
          </div>
        )}
      </div>
    </div>
  );
}
