import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-8 max-w-4xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-[#569cd6] hover:underline mb-6"
      >
        <ArrowLeft size={14} />
        返回博客列表
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#d4d4d4] mb-4">
            {post.title}
          </h1>
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
        </header>

        <div className="prose prose-invert prose-pre:bg-[#252526] prose-pre:border prose-pre:border-[#3c3c3c] max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
}
