import { Link } from "react-router";
import useHeaderStore from "../../../stores/useHeaderStore";
import useUserStore from "../../../stores/useUserStore";

const Header = () => {
  const { isDarkMode, toggleTheme } = useHeaderStore();
  const { user, isAuthenticated } = useUserStore();

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="logo">
              <span className="logo-icon">📖</span>
              <span className="logo-text">NOVEL BIN</span>
            </div>

            {/* Navigation */}
            <nav className="nav">
              <div className="nav-item">
                <span>📋 Novel List</span>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className="nav-item">
                <span>📚 Genre</span>
                <span className="dropdown-arrow">▼</span>
              </div>
            </nav>

            {/* Search and User Actions */}
            <div className="header-right">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button className="search-btn">🔍</button>
              </div>

              {isAuthenticated ? (
                <div className="user-menu">
                  <Link to="/profile" className="profile-link">
                    <img
                      src={
                        user?.avatar ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.username || "User"
                        )}&background=6366f1&color=fff&size=32`
                      }
                      alt="Profile"
                      className="profile-avatar"
                    />
                    <span className="profile-name">
                      {user?.username || "User"}
                    </span>
                  </Link>
                </div>
              ) : (
                <Link to={"login"} className="login-btn">
                  👤 Login/Signup
                </Link>
              )}

              <button className="settings-btn" onClick={toggleTheme}>
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
