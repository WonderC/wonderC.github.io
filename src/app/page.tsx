import Link from "next/link";
import { getBlogPosts, getProjects } from "@/lib/content";
import { ArrowRight, FileText, Briefcase } from "lucide-react";

export default function Home() {
  const posts = getBlogPosts().slice(0, 3);
  const projects = getProjects().slice(0, 3);

  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#d4d4d4] mb-4">
          👋 你好，我是开发者
        </h1>
        <p className="text-lg text-[#858585] mb-6">
          全栈开发者，热爱构建优雅的技术解决方案。
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0e639c] text-white rounded hover:bg-[#1177bb] transition-colors"
          >
            查看项目 <ArrowRight size={16} />
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#3c3c3c] text-[#cccccc] rounded hover:bg-[#2a2d2e] transition-colors"
          >
            阅读博客 <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Recent Projects */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-[#569cd6]">
          <Briefcase size={20} />
          <h2 className="text-xl font-semibold">最近项目</h2>
        </div>
        <div className="space-y-4">
          {projects.length > 0 ? (
            projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block p-4 border border-[#3c3c3c] rounded hover:bg-[#252526] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-[#d4d4d4] mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#858585] mb-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-[#264f78] text-[#4ec9b0] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-[#858585]">暂无项目</p>
          )}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 mt-4 text-sm text-[#569cd6] hover:underline"
        >
          查看全部项目 <ArrowRight size={14} />
        </Link>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex items-center gap-2 mb-4 text-[#569cd6]">
          <FileText size={20} />
          <h2 className="text-xl font-semibold">最新文章</h2>
        </div>
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block p-4 border border-[#3c3c3c] rounded hover:bg-[#252526] transition-colors"
              >
                <h3 className="text-lg font-medium text-[#d4d4d4] mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-[#858585] mb-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#858585]">
                  <span>{post.date}</span>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[#4ec9b0]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-[#858585]">暂无文章</p>
          )}
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 mt-4 text-sm text-[#569cd6] hover:underline"
        >
          查看全部文章 <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
