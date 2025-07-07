import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./InfoPage.css";

const InfoPage = () => {
  const { isDarkMode } = useHeaderStore();
  const navigate = useNavigate();
  const { id } = useParams(); // Get novel ID from URL
  const [activeTab, setActiveTab] = useState("description");
  const [isInLibrary, setIsInLibrary] = useState(false);
  const [rating, setRating] = useState(0);

  // Sample novel data - in real app this would come from props or API based on URL id
  const novel = {
    id: parseInt(id) || 1,
    title: "MMORPG: Rebirth as an Alchemist",
    author: "MiuNovels",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    rating: 4.7,
    totalRatings: 1284,
    status: "Ongoing",
    genre: ["Fantasy", "Adventure", "MMORPG"],
    tags: ["Male Lead", "Virtual Reality", "Magic", "System"],
    publishDate: "2023-01-15",
    lastUpdate: "2024-12-15",
    totalChapters: 892,
    totalViews: "2.1M",
    description: `After being betrayed by his closest friend who vowed to protect him, Ren embarked on a quest for revenge. However, things didn't go as planned. He died at the last boss, just inches away from getting his revenge.

Ren thought it was all over for him. The next time he opened his eyes, he was back to the time when he was still level 1. What happened? Did he just reincarnate?

But wait... his friend was also back to this timeline!

Will Ren be able to get his revenge this time, or will he fall into the same traps again?

Join Ren on his journey as he becomes the most overpowered Alchemist in the virtual world of COVENANT!`,
    chapters: [
      {
        id: 1,
        title: "The Beginning of the End",
        publishDate: "2023-01-15",
        isRead: true,
      },
      {
        id: 2,
        title: "Back to Level 1",
        publishDate: "2023-01-16",
        isRead: true,
      },
      {
        id: 3,
        title: "The Alchemist's Path",
        publishDate: "2023-01-17",
        isRead: false,
      },
      {
        id: 4,
        title: "First Revenge",
        publishDate: "2023-01-18",
        isRead: false,
      },
      {
        id: 5,
        title: "Power Leveling",
        publishDate: "2023-01-19",
        isRead: false,
      },
    ],
    reviews: [
      {
        id: 1,
        username: "BookLover123",
        rating: 5,
        date: "2024-12-10",
        comment:
          "Amazing story! The character development is incredible and the world-building is fantastic. Can't wait for more chapters!",
      },
      {
        id: 2,
        username: "NovelAddict",
        rating: 4,
        date: "2024-12-08",
        comment:
          "Great concept with the rebirth mechanic. Some pacing issues but overall very engaging.",
      },
      {
        id: 3,
        username: "RPGFan",
        rating: 5,
        date: "2024-12-05",
        comment:
          "As someone who loves MMORPG novels, this is definitely one of the best. The system is well thought out.",
      },
    ],
  };

  // Get last read chapter from localStorage or default to 1
  const getLastReadChapter = () => {
    const savedProgress = localStorage.getItem(`reading-progress-${novel.id}`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      return progress.chapterId || 1;
    }
    return 1;
  };

  const handleStartReading = () => {
    navigate(`/info/${novel.id}/reading/1`);
  };

  const handleContinueReading = () => {
    const lastChapter = getLastReadChapter();
    navigate(`/info/${novel.id}/reading/${lastChapter}`);
  };

  const hasReadingProgress = getLastReadChapter() > 1;

  const handleAddToLibrary = () => {
    setIsInLibrary(!isInLibrary);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const renderStars = (rating, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? "filled" : ""} ${
          interactive ? "interactive" : ""
        }`}
        onClick={interactive ? () => handleRating(index + 1) : undefined}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className={`info-page ${isDarkMode ? "dark" : "light"}`}>
      <div className="container">
        {/* Novel Header */}
        <div className="novel-header">
          <div className="novel-cover">
            <img src={novel.cover} alt={novel.title} />
            <div className="cover-overlay">
              <button
                className={`library-btn ${isInLibrary ? "added" : ""}`}
                onClick={handleAddToLibrary}
              >
                {isInLibrary ? "✓ In Library" : "+ Add to Library"}
              </button>
            </div>
          </div>

          <div className="novel-info">
            <div className="novel-title-section">
              <h1 className="novel-title">{novel.title}</h1>
              <p className="novel-author">by {novel.author}</p>

              <div className="novel-stats">
                <div className="stat-item">
                  <span className="stat-label">Rating:</span>
                  <div className="rating-display">
                    {renderStars(Math.floor(novel.rating))}
                    <span className="rating-text">
                      {novel.rating} ({novel.totalRatings} reviews)
                    </span>
                  </div>
                </div>

                <div className="stat-item">
                  <span className="stat-label">Status:</span>
                  <span className={`status ${novel.status.toLowerCase()}`}>
                    {novel.status}
                  </span>
                </div>

                <div className="stat-item">
                  <span className="stat-label">Chapters:</span>
                  <span className="stat-value">{novel.totalChapters}</span>
                </div>

                <div className="stat-item">
                  <span className="stat-label">Views:</span>
                  <span className="stat-value">{novel.totalViews}</span>
                </div>
              </div>

              <div className="novel-genres">
                {novel.genre.map((genre, index) => (
                  <span key={index} className="genre-tag">
                    {genre}
                  </span>
                ))}
              </div>

              <div className="novel-tags">
                {novel.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <button className="read-btn primary" onClick={handleStartReading}>
                📖 Start Reading
              </button>
              {hasReadingProgress && (
                <button
                  className="read-btn secondary"
                  onClick={handleContinueReading}
                >
                  📑 Continue Reading (Chapter {getLastReadChapter()})
                </button>
              )}
              <button className="bookmark-btn">🔖 Bookmark</button>
              <button className="share-btn">📤 Share</button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button
            className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
            onClick={() => setActiveTab("description")}
          >
            📝 Description
          </button>
          <button
            className={`tab-btn ${activeTab === "chapters" ? "active" : ""}`}
            onClick={() => setActiveTab("chapters")}
          >
            📚 Chapters ({novel.totalChapters})
          </button>
          <button
            className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            ⭐ Reviews ({novel.totalRatings})
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Description Tab */}
          {activeTab === "description" && (
            <div className="description-content">
              <div className="description-text">
                {novel.description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="novel-metadata">
                <h3>Novel Information</h3>
                <div className="metadata-grid">
                  <div className="metadata-item">
                    <span className="metadata-label">Published:</span>
                    <span className="metadata-value">
                      {new Date(novel.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Last Update:</span>
                    <span className="metadata-value">
                      {new Date(novel.lastUpdate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Author:</span>
                    <span className="metadata-value">{novel.author}</span>
                  </div>
                  <div className="metadata-item">
                    <span className="metadata-label">Language:</span>
                    <span className="metadata-value">English</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chapters Tab */}
          {activeTab === "chapters" && (
            <div className="chapters-content">
              <div className="chapters-header">
                <h3>Chapter List</h3>
                <div className="chapter-filters">
                  <button className="filter-btn">📅 Sort by Date</button>
                  <button className="filter-btn">🔢 Sort by Number</button>
                </div>
              </div>

              <div className="chapters-list">
                {novel.chapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className={`chapter-item ${chapter.isRead ? "read" : ""}`}
                  >
                    <div className="chapter-info">
                      <h4 className="chapter-title">
                        Chapter {chapter.id}: {chapter.title}
                      </h4>
                      <span className="chapter-date">
                        {new Date(chapter.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="chapter-actions">
                      <button className="read-chapter-btn">
                        {chapter.isRead ? "👁️ Read" : "📖 Read"}
                      </button>
                    </div>
                  </div>
                ))}

                <div className="load-more">
                  <button className="load-more-btn">Load More Chapters</button>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="reviews-content">
              <div className="review-summary">
                <h3>Reader Reviews</h3>
                <div className="rating-overview">
                  <div className="average-rating">
                    <span className="rating-number">{novel.rating}</span>
                    <div className="rating-stars">
                      {renderStars(Math.floor(novel.rating))}
                    </div>
                    <span className="rating-count">
                      Based on {novel.totalRatings} reviews
                    </span>
                  </div>

                  <div className="add-review">
                    <h4>Rate this novel:</h4>
                    <div className="user-rating">
                      {renderStars(rating, true)}
                    </div>
                    <button className="submit-review-btn">Write Review</button>
                  </div>
                </div>
              </div>

              <div className="reviews-list">
                {novel.reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <span className="reviewer-name">{review.username}</span>
                        <div className="review-rating">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <span className="review-date">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                    <div className="review-actions">
                      <button className="review-action-btn">👍 Helpful</button>
                      <button className="review-action-btn">💬 Reply</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
