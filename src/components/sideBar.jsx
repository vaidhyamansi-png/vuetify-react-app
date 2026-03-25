import React, { useState } from 'react'



const MegaphoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>
)

const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
)

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)

const CollapseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
  </svg>
)

const FrontendTaskIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" fill="#6366f1"/>
    <path d="M8 21h8M12 17v4" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 9l3 3-3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="13" y1="15" x2="17" y2="15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const SideBar = () => {
  const [theme, setTheme] = useState('light')
  const [activeItem, setActiveItem] = useState('Campaign')

  const isDark = theme === 'dark'

  return (
    <div className={`sidebar ${isDark ? 'dark' : ''}`}>

      {/* Header */}
      <div className="sidebar__header">
        <div className="sidebar__header-left">
          <FrontendTaskIcon />
          <span className="sidebar__brand-name">Frontend Task</span>
        </div>
        <button className="sidebar__collapse-btn" title="Collapse sidebar">
          <CollapseIcon />
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">
        <button
          className={`sidebar__nav-item ${activeItem === 'Campaign' ? 'active' : ''}`}
          onClick={() => setActiveItem('Campaign')}
        >
          <span className="sidebar__nav-icon">
            <MegaphoneIcon />
          </span>
          Campaign
        </button>
      </nav>

      {/* Footer */}
      <div className="sidebar__footer">

        {/* Profile Row */}
        <div className="sidebar__profile-row">
          <div className="sidebar__avatar-wrap">
            <div className="sidebar__avatar">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="John Doe"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <div className="sidebar__online-dot" />
          </div>
          <div className="sidebar__profile-info">
            <div className="sidebar__profile-name">John Doe</div>
            <div className="sidebar__profile-role">Admin</div>
          </div>
          <button className="sidebar__logout-btn" title="Logout">
            <LogoutIcon />
          </button>
        </div>

        {/* Email */}
        <div className="sidebar__email-section">
          <div className="sidebar__email-label">Email</div>
          <div className="sidebar__email-value">johndoe@gmail.com</div>
        </div>

        {/* Theme Toggle */}
        <div className="sidebar__theme-toggle">
          <button
            className={`sidebar__theme-btn ${theme === 'light' ? 'active' : ''}`}
            onClick={() => setTheme('light')}
          >
            <SunIcon />
            Light
          </button>
          <button
            className={`sidebar__theme-btn ${theme === 'dark' ? 'active' : ''}`}
            onClick={() => setTheme('dark')}
          >
            <MoonIcon />
            Dark
          </button>
        </div>

      </div>
    </div>
  )
}

export default SideBar