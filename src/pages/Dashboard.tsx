import { Bell, Search, ArrowRight, Cookie, ShieldCheck, FileText, ClipboardList } from 'lucide-react'

const stats = [
  { label: 'Active Scans', value: '3', change: '+1 today', icon: <Cookie size={16} />, color: 'violet' },
  { label: 'Compliance Score', value: '87%', change: '+4% this week', icon: <ShieldCheck size={16} />, color: 'emerald' },
  { label: 'Open Drafts', value: '5', change: '2 pending review', icon: <FileText size={16} />, color: 'blue' },
  { label: 'Assessments', value: '12', change: '3 due soon', icon: <ClipboardList size={16} />, color: 'amber' },
]

const colorMap: Record<string, string> = {
  violet: 'bg-violet-50 text-violet-600',
  emerald: 'bg-emerald-50 text-emerald-600',
  blue: 'bg-blue-50 text-blue-600',
  amber: 'bg-amber-50 text-amber-600',
}

const recent = [
  { title: 'Cookie scan completed for example.com', time: '2 hours ago', type: 'scan' },
  { title: 'Legal draft: NDA Template v2 updated', time: '5 hours ago', type: 'draft' },
  { title: 'PSQ Assessment submitted', time: 'Yesterday', type: 'assessment' },
  { title: 'Vulnerability report: 2 issues found', time: 'Yesterday', type: 'vuln' },
]

export default function Dashboard() {
  return (
    <div className="p-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-0.5">Welcome back, Deepthi 👋</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-400 w-48">
            <Search size={14} />
            <span>Search...</span>
          </div>
          <button className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors relative">
            <Bell size={15} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-violet-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`p-1.5 rounded-lg ${colorMap[stat.color]}`}>{stat.icon}</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900 tracking-tight">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            <p className="text-xs text-emerald-600 mt-2 font-medium">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Start Cookie Scan', desc: 'Scan a website for cookies', href: '/cookie-scanning/detection' },
            { label: 'Ask Legal Question', desc: 'Get AI-powered legal answers', href: '/legal/ask' },
            { label: 'New Assessment', desc: 'Begin a compliance assessment', href: '/assessment/psq' },
          ].map(action => (
            <a
              key={action.label}
              href={action.href}
              className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between group hover:border-violet-200 hover:shadow-sm transition-all"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{action.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{action.desc}</p>
              </div>
              <ArrowRight size={15} className="text-gray-300 group-hover:text-violet-500 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Recent Activity</h2>
        <div className="bg-white border border-gray-100 rounded-xl divide-y divide-gray-50">
          {recent.map((item, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3">
              <p className="text-sm text-gray-700">{item.title}</p>
              <span className="text-xs text-gray-400 ml-4 flex-shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
