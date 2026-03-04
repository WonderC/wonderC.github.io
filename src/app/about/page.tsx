import { getAbout } from "@/lib/content";
import { User, Mail, Github, Twitter } from "lucide-react";

export default function AboutPage() {
  const about = getAbout();

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#d4d4d4] mb-2">关于我</h1>
        <p className="text-[#858585]">了解更多关于我的信息</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="p-6 border border-[#3c3c3c] rounded bg-[#252526]">
            <div className="w-24 h-24 bg-[#3c3c3c] rounded-full mx-auto mb-4 flex items-center justify-center">
              <User size={40} className="text-[#858585]" />
            </div>
            <h2 className="text-xl font-semibold text-[#d4d4d4] text-center mb-2">
              开发者
            </h2>
            <p className="text-sm text-[#858585] text-center mb-4">
              全栈开发者
            </p>
            
            <div className="space-y-2">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 text-sm text-[#858585] hover:text-[#569cd6] transition-colors"
              >
                <Mail size={16} />
                your@email.com
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#858585] hover:text-[#569cd6] transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://twitter.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#858585] hover:text-[#569cd6] transition-colors"
              >
                <Twitter size={16} />
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="p-6 border border-[#3c3c3c] rounded">
            {about ? (
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: about.content }} />
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#858585]">暂无内容</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
