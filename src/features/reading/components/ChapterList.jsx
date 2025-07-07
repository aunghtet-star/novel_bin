import React, { useState } from "react";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./ChapterList.css";

const ChapterList = ({ novel, currentChapter, onChapterSelect, onClose }) => {
  const { isDarkMode } = useHeaderStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  // Generate full chapter list (in real app, this would come from API)
  const generateChapterList = () => {
    const chapters = [];
    for (let i = 1; i <= Math.min(novel.totalChapters, 50); i++) {
      chapters.push({
        id: i,
        title: novel.chapters[i]?.title || `Chapter ${i}`,
        publishDate: novel.chapters[i]?.publishDate || "2023-01-15",
        wordCount:
          novel.chapters[i]?.wordCount ||
          Math.floor(Math.random() * 2000) + 1500,
        isRead: i <= currentChapter,
        isLocked: false, // In real app, some chapters might be locked
      });
    }
    return chapters;
  };

  const allChapters = generateChapterList();

  // Filter and sort chapters
  const filteredChapters = allChapters
    .filter(
      (chapter) =>
        chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chapter.id.toString().includes(searchTerm)
    )
    .sort((a, b) => {
      return sortOrder === "asc" ? a.id - b.id : b.id - a.id;
    });

  const handleChapterClick = (chapterId) => {
    onChapterSelect(chapterId);
  };

  return (
    <div className={`chapter-list ${isDarkMode ? "dark" : "light"} visible`}>
      <div className="chapter-list-panel">
        <header className="chapter-list-header">
          <h3>Chapters ({novel.totalChapters})</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </header>

        <div className="chapter-controls">
          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search chapters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          {/* Sort Controls */}
          <div className="sort-controls">
            <button
              className={`sort-btn ${sortOrder === "asc" ? "active" : ""}`}
              onClick={() => setSortOrder("asc")}
            >
              ↑ Oldest First
            </button>
            <button
              className={`sort-btn ${sortOrder === "desc" ? "active" : ""}`}
              onClick={() => setSortOrder("desc")}
            >
              ↓ Newest First
            </button>
          </div>

          {/* Quick Navigation */}
          <div className="quick-nav">
            <button
              className="quick-nav-btn"
              onClick={() => onChapterSelect(1)}
            >
              📖 First Chapter
            </button>
            <button
              className="quick-nav-btn"
              onClick={() => onChapterSelect(currentChapter)}
            >
              📍 Current Chapter
            </button>
            <button
              className="quick-nav-btn"
              onClick={() => onChapterSelect(novel.totalChapters)}
            >
              🏁 Latest Chapter
            </button>
          </div>
        </div>

        <div className="chapter-list-content">
          {filteredChapters.length === 0 ? (
            <div className="no-results">
              <p>No chapters found matching "{searchTerm}"</p>
            </div>
          ) : (
            <div className="chapters-grid">
              {filteredChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`chapter-item ${
                    chapter.id === currentChapter ? "current" : ""
                  } ${chapter.isRead ? "read" : ""} ${
                    chapter.isLocked ? "locked" : ""
                  }`}
                  onClick={() =>
                    !chapter.isLocked && handleChapterClick(chapter.id)
                  }
                >
                  <div className="chapter-number">
                    {chapter.id === currentChapter && (
                      <span className="current-indicator">▶</span>
                    )}
                    Chapter {chapter.id}
                    {chapter.isLocked && <span className="lock-icon">🔒</span>}
                  </div>

                  <div className="chapter-title">{chapter.title}</div>

                  <div className="chapter-meta">
                    <span className="chapter-date">
                      {new Date(chapter.publishDate).toLocaleDateString()}
                    </span>
                    <span className="chapter-words">
                      {chapter.wordCount?.toLocaleString()} words
                    </span>
                  </div>

                  <div className="chapter-status">
                    {chapter.isRead ? (
                      <span className="status-read">✓ Read</span>
                    ) : (
                      <span className="status-unread">○ Unread</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button (for pagination) */}
          {filteredChapters.length >= 50 && novel.totalChapters > 50 && (
            <div className="load-more-container">
              <button className="load-more-btn">
                Load More Chapters ({novel.totalChapters - 50} remaining)
              </button>
            </div>
          )}
        </div>

        {/* Reading Progress */}
        <div className="reading-progress">
          <div className="progress-info">
            <span>Reading Progress</span>
            <span>
              {currentChapter} / {novel.totalChapters} chapters
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(currentChapter / novel.totalChapters) * 100}%`,
              }}
            ></div>
          </div>
          <div className="progress-percentage">
            {Math.round((currentChapter / novel.totalChapters) * 100)}% Complete
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterList;
