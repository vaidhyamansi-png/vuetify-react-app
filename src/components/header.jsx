import React from "react";

 
const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="home-icon"
  >
    <path
      d="M3 9.5L12 3L21 9.5V20C21 20.5523 20.5523 21 20 21H15V15H9V21H4C3.44772 21 3 20.5523 3 20V9.5Z"
      stroke="#4A90D9"
      strokeWidth="1.8"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);
 
const ChevronIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="chevron-icon"
  >
    <path
      d="M9 6L15 12L9 18"
      stroke="#888"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
 
const Header = ({
  breadcrumbs = ["Campaign"],
  userName = "John Doe",
  userRole = "Admin",
  userAvatar = "https://i.pravatar.cc/40?img=12",
  isOnline = true,
}) => {
  return (
    <div className="header-wrapper">
      <header className="app-header">
        {/* Left: Breadcrumb */}
        <nav className="breadcrumb" aria-label="breadcrumb">
          <span className="breadcrumb-home" title="Home">
            <HomeIcon />
          </span>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronIcon />
              <span
                className={`breadcrumb-item ${
                  index === breadcrumbs.length - 1 ? "active" : ""
                }`}
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </nav>
 
        {/* Right: User Info */}
        <div className="user-info">
          <div className="user-text">
            <span className="user-name">{userName}</span>
            <span className="user-role">{userRole}</span>
          </div>
          <div className="avatar-wrapper">
            <img src={userAvatar} alt={userName} className="user-avatar" />
            {isOnline && <span className="online-dot" />}
          </div>
        </div>
      </header>
    </div>
  );
};
 
export default Header;