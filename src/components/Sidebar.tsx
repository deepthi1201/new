import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Scale,
  MessageSquare,
  FileText,
  PenTool,
  Handshake,
  Cookie,
  ScanSearch,
  ShieldAlert,
  ClipboardCheck,
  Library,
  ListTodo,
  ChevronDown,
  ChevronRight,
  Upload,
  Bot,
} from 'lucide-react'
import { useState } from 'react'

interface NavItem {
  label: string
  icon: React.ReactNode
  to?: string
  children?: { label: string; icon: React.ReactNode; to: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    icon: <LayoutDashboard size={16} />,
    to: '/dashboard',
  },
  {
    label: 'Legal',
    icon: <Scale size={16} />,
    children: [
      { label: 'Ask', icon: <MessageSquare size={14} />, to: '/legal/ask' },
      { label: 'Interact', icon: <FileText size={14} />, to: '/legal/interact' },
      { label: 'Draft', icon: <PenTool size={14} />, to: '/legal/draft' },
      { label: 'Negotiation', icon: <Handshake size={14} />, to: '/legal/negotiation' },
    ],
  },
  {
    label: 'Cookie Scanning',
    icon: <Cookie size={16} />,
    children: [
      { label: 'Cookie Detection', icon: <ScanSearch size={14} />, to: '/cookie-scanning/detection' },
      { label: 'Vulnerability Detection', icon: <ShieldAlert size={14} />, to: '/cookie-scanning/vulnerability' },
    ],
  },
  {
    label: 'Assessment',
    icon: <ClipboardCheck size={16} />,
    children: [
      { label: 'PSQ', icon: <ClipboardCheck size={14} />, to: '/assessment/psq' },
      { label: 'PbD', icon: <ClipboardCheck size={14} />, to: '/assessment/pbd' },
      { label: 'SbD', icon: <ClipboardCheck size={14} />, to: '/assessment/sbd' },
      { label: 'AI', icon: <Bot size={14} />, to: '/assessment/ai' },
      { label: 'SRA', icon: <ShieldAlert size={14} />, to: '/assessment/sra' },
      { label: 'Upload & Auto-Fill', icon: <Upload size={14} />, to: '/assessment/upload' },
    ],
  },
  {
    label: 'Library',
    icon: <Library size={16} />,
    to: '/library',
  },
  {
    label: 'Queue',
    icon: <ListTodo size={16} />,
    to: '/queue',
  },
]

export default function Sidebar() {
  const location = useLocation()
  const [expanded, setExpanded] = useState<string[]>(['Legal', 'Cookie Scanning', 'Assessment'])

  const toggle = (label: string) => {
    setExpanded(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    )
  }

  return (
    <aside className="w-60 flex-shrink-0 h-full flex flex-col bg-white border-r border-gray-100 relative z-20">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <Cookie size={14} className="text-white" />
          </div>
          <span className="font-semibold text-gray-900 text-[15px] tracking-tight">Cookie Care</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {navItems.map((item) => {
          if (item.to) {
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm mb-0.5 transition-colors ${
                    isActive
                      ? 'bg-violet-50 text-violet-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <span className="opacity-70">{item.icon}</span>
                {item.label}
              </NavLink>
            )
          }

          const isOpen = expanded.includes(item.label)
          const isChildActive = item.children?.some(c => location.pathname.startsWith(c.to))

          return (
            <div key={item.label} className="mb-0.5">
              <button
                onClick={() => toggle(item.label)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isChildActive
                    ? 'text-violet-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="opacity-70">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                <span className="opacity-40">
                  {isOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
                </span>
              </button>
              {isOpen && (
                <div className="ml-3 pl-3 border-l border-gray-100 mt-0.5 mb-1">
                  {item.children?.map(child => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[13px] mb-0.5 transition-colors ${
                          isActive
                            ? 'bg-violet-50 text-violet-700 font-medium'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                        }`
                      }
                    >
                      <span className="opacity-60">{child.icon}</span>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-semibold">
            D
          </div>
          <div>
            <p className="text-[13px] font-medium text-gray-800 leading-none">Deepthi</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
