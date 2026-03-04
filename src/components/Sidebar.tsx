'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Folder, FolderOpen, Home, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    name: '首页',
    path: '/',
    icon: <Home size={16} />,
  },
  {
    name: '项目',
    path: '/projects',
    icon: <Briefcase size={16} />,
  },
  {
    name: '博客',
    path: '/blog',
    icon: <FileText size={16} />,
  },
  {
    name: '关于',
    path: '/about',
    icon: <User size={16} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['pages']);

  const toggleFolder = (name: string) => {
    setExpandedFolders(prev =>
      prev.includes(name)
        ? prev.filter(n => n !== name)
        : [...prev, name]
    );
  };

  return (
    <aside className="w-64 bg-[#252526] border-r border-[#3c3c3c] flex flex-col">
      {/* Explorer Header */}
      <div className="px-4 py-2 text-xs font-semibold text-[#bbbbbb] uppercase tracking-wider">
        资源管理器
      </div>

      {/* File Tree */}
      <nav className="flex-1 overflow-y-auto">
        {/* Pages Folder */}
        <div>
          <button
            onClick={() => toggleFolder('pages')}
            className="w-full flex items-center gap-1 px-2 py-1 text-[#cccccc] hover:bg-[#2a2d2e] text-sm"
          >
            {expandedFolders.includes('pages') ? (
              <FolderOpen size={16} className="text-[#dcb67a]" />
            ) : (
              <Folder size={16} className="text-[#dcb67a]" />
            )}
            <span>pages</span>
          </button>

          {expandedFolders.includes('pages') && (
            <div className="ml-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 px-2 py-1 text-sm ${
                      isActive
                        ? 'bg-[#37373d] text-[#ffffff]'
                        : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                    }`}
                  >
                    <span className={isActive ? 'text-[#519aba]' : 'text-[#519aba]'}>
                      {item.icon}
                    </span>
                    <span>{item.name}.tsx</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Content Folder */}
        <div className="mt-2">
          <button
            onClick={() => toggleFolder('content')}
            className="w-full flex items-center gap-1 px-2 py-1 text-[#cccccc] hover:bg-[#2a2d2e] text-sm"
          >
            {expandedFolders.includes('content') ? (
              <FolderOpen size={16} className="text-[#dcb67a]" />
            ) : (
              <Folder size={16} className="text-[#dcb67a]" />
            )}
            <span>content</span>
          </button>

          {expandedFolders.includes('content') && (
            <div className="ml-4">
              <div className="flex items-center gap-2 px-2 py-1 text-sm text-[#cccccc]">
                <Folder size={16} className="text-[#dcb67a]" />
                <span>blog</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 text-sm text-[#cccccc]">
                <Folder size={16} className="text-[#dcb67a]" />
                <span>projects</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
