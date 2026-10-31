import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// Add a line here later for each new app page
const links = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/transactions', label: 'Transactions', icon: '💸' },
]

function AppLayout() {
  const [collapsed, setCollapsed] = useState(false)

  function sideClass({ isActive }) {
    return (
      'flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ' +
      (isActive ? 'bg-violet/20 text-fg' : 'text-muted hover:bg-glass hover:text-fg')
    )
  }

  function tabClass({ isActive }) {
    return (
      'flex flex-1 flex-col items-center gap-0.5 rounded-xl py-1.5 text-xs transition-colors ' +
      (isActive ? 'text-cyan' : 'text-muted')
    )
  }

  return (
    <div className="md:flex">
      {/* Sidebar: laptops only */}
      <aside
        className={
          'sticky top-0 hidden h-screen shrink-0 flex-col gap-2 border-r border-edge bg-night/60 p-4 backdrop-blur-md md:flex ' +
          (collapsed ? 'w-20' : 'w-60')
        }
      >
        <div className="mb-4 flex items-center justify-between">
          {!collapsed && <span className="font-heading text-xl font-bold">Opesora</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            aria-label="Collapse or expand sidebar"
            className="rounded-lg px-2 py-1 text-muted hover:bg-glass hover:text-fg"
          >
            {collapsed ? '»' : '«'}
          </button>
        </div>

        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end title={link.label} className={sideClass}>
            <span className="text-xl">{link.icon}</span>
            {!collapsed && <span>{link.label}</span>}
          </NavLink>
        ))}
      </aside>

      {/* The page goes here. A div, because the pages already use <main> */}
      <div className="min-w-0 flex-1 pb-24 md:pb-0">
        <Outlet />
      </div>

      {/* Bottom tab bar: phones only */}
      <nav className="fixed inset-x-0 bottom-0 z-50 flex border-t border-edge bg-night/80 px-2 pt-2 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end className={tabClass}>
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default AppLayout