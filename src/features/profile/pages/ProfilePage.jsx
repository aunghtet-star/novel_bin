import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../../../stores/useUserStore";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user, updateProfile, logout, login, isAuthenticated } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "Guest User",
    email: user?.email || "guest@example.com",
    bio: user?.bio || "A passionate reader exploring new worlds through books.",
    favoriteGenre: user?.favoriteGenre || "Fantasy",
    joinDate: user?.joinDate || "2024-01-01",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username || "Guest User",
      email: user?.email || "guest@example.com",
      bio:
        user?.bio || "A passionate reader exploring new worlds through books.",
      favoriteGenre: user?.favoriteGenre || "Fantasy",
      joinDate: user?.joinDate || "2024-01-01",
    });
    setIsEditing(false);
  };

  const readingStats = {
    booksRead: user?.booksRead || 47,
    currentlyReading: user?.currentlyReading || 3,
    favorites: user?.favorites || 12,
    totalChapters: user?.totalChapters || 1247,
  };

  // If not authenticated, show login prompt
  if (!isAuthenticated) {
    return (
      <div className="profile-page">
        <div className="container">
          <div className="profile-container">
            <div className="profile-header">
              <div className="profile-info">
                <h1 className="profile-name">Please Log In</h1>
                <p className="profile-bio">
                  You need to be logged in to view your profile.
                </p>
                <div className="profile-actions">
                  <button
                    className="edit-profile-btn"
                    onClick={() => {
                      // Demo login for testing
                      login({
                        username: "bookworm",
                        email: "demo@example.com",
                        bio: "A passionate reader exploring new worlds through books.",
                        favoriteGenre: "Fantasy",
                        joinDate: "2024-01-01",
                        booksRead: 47,
                        currentlyReading: 3,
                        favorites: 12,
                        totalChapters: 1247,
                      });
                    }}
                  >
                    🎯 Demo Login
                  </button>
                  <Link to="/login" className="login-btn">
                    👤 Go to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-container">
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar">
              <img
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    formData.username
                  )}&background=6366f1&color=fff&size=120`
                }
                alt="Profile Avatar"
                className="avatar-image"
              />
              <button className="change-avatar-btn">📷</button>
            </div>
            <div className="profile-info">
              {!isEditing ? (
                <>
                  <h1 className="profile-name">{formData.username}</h1>
                  <p className="profile-email">{formData.email}</p>
                  <p className="profile-bio">{formData.bio}</p>
                  <div className="profile-meta">
                    <span className="join-date">
                      📅 Joined{" "}
                      {new Date(formData.joinDate).toLocaleDateString()}
                    </span>
                    <span className="favorite-genre">
                      ❤️ {formData.favoriteGenre}
                    </span>
                  </div>
                </>
              ) : (
                <div className="profile-edit-form">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="edit-input"
                    placeholder="Username"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="edit-input"
                    placeholder="Email"
                  />
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="edit-textarea"
                    placeholder="Bio"
                    rows="3"
                  />
                  <select
                    name="favoriteGenre"
                    value={formData.favoriteGenre}
                    onChange={handleInputChange}
                    className="edit-select"
                  >
                    <option value="Fantasy">Fantasy</option>
                    <option value="Romance">Romance</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Horror">Horror</option>
                    <option value="Adventure">Adventure</option>
                  </select>
                </div>
              )}
              <div className="profile-actions">
                {!isEditing ? (
                  <button
                    className="edit-profile-btn"
                    onClick={() => setIsEditing(true)}
                  >
                    ✏️ Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button className="save-btn" onClick={handleSave}>
                      ✅ Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      ❌ Cancel
                    </button>
                  </div>
                )}
                <button className="logout-btn" onClick={logout}>
                  🚪 Logout
                </button>
              </div>
            </div>
          </div>

          {/* Reading Statistics */}
          <div className="reading-stats">
            <h2>📊 Reading Statistics</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-number">{readingStats.booksRead}</div>
                <div className="stat-label">Books Read</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📖</div>
                <div className="stat-number">
                  {readingStats.currentlyReading}
                </div>
                <div className="stat-label">Currently Reading</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">❤️</div>
                <div className="stat-number">{readingStats.favorites}</div>
                <div className="stat-label">Favorites</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📄</div>
                <div className="stat-number">{readingStats.totalChapters}</div>
                <div className="stat-label">Chapters Read</div>
              </div>
            </div>
          </div>

          {/* Reading History */}
          <div className="reading-history">
            <h2>📖 Recent Reading</h2>
            <div className="history-list">
              <div className="history-item">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=80&h=120&fit=crop"
                  alt="Book cover"
                  className="history-cover"
                />
                <div className="history-info">
                  <h3>The Shadow of the Wind</h3>
                  <p>Chapter 12: The Cemetery of Forgotten Books</p>
                  <span className="history-date">2 hours ago</span>
                </div>
                <div className="history-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span className="progress-text">75%</span>
                </div>
              </div>

              <div className="history-item">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=80&h=120&fit=crop"
                  alt="Book cover"
                  className="history-cover"
                />
                <div className="history-info">
                  <h3>Digital Fortress</h3>
                  <p>Chapter 8: The Algorithm</p>
                  <span className="history-date">1 day ago</span>
                </div>
                <div className="history-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span className="progress-text">45%</span>
                </div>
              </div>

              <div className="history-item">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=120&fit=crop"
                  alt="Book cover"
                  className="history-cover"
                />
                <div className="history-info">
                  <h3>The Time Machine</h3>
                  <p>Chapter 15: The Final Journey</p>
                  <span className="history-date">3 days ago</span>
                </div>
                <div className="history-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="progress-text">Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bookmarks */}
          <div className="bookmarks-section">
            <h2>🔖 Bookmarks</h2>
            <div className="bookmarks-grid">
              <div className="bookmark-item">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&h=180&fit=crop"
                  alt="Book cover"
                  className="bookmark-cover"
                />
                <div className="bookmark-info">
                  <h4>The Shadow of the Wind</h4>
                  <p>Chapter 5</p>
                </div>
              </div>
              <div className="bookmark-item">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=120&h=180&fit=crop"
                  alt="Book cover"
                  className="bookmark-cover"
                />
                <div className="bookmark-info">
                  <h4>Digital Fortress</h4>
                  <p>Chapter 3</p>
                </div>
              </div>
              <div className="bookmark-item">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=180&fit=crop"
                  alt="Book cover"
                  className="bookmark-cover"
                />
                <div className="bookmark-info">
                  <h4>The Time Machine</h4>
                  <p>Chapter 8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
