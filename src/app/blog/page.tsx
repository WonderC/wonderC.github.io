import Link from "next/link";
import { getBlogPosts } from "@/lib/content";
import { FileText, Calendar, Tag } from "lucide-react";

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#d4d4d4] mb-2">博客</h1>
        <p className="text-[#858585]">分享技术心得和学习笔记</p>
      </div>

      <div className="space-y-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 border border-[#3c3c3c] rounded hover:bg-[#252526] transition-colors"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-semibold text-[#569cd6] hover:underline mb-2">
                  {post.title}
                </h2>
              </Link>
              
              <p className="text-[#858585] mb-4">{post.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-[#858585]">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Tag size={14} />
                  {post.tags.join(", ")}
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto text-[#3c3c3c] mb-4" />
            <p className="text-[#858585]">暂无文章</p>
          </div>
        )}
      </div>
    </div>
  );
}
