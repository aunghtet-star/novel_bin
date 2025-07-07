import React from "react";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./ReadingHeader.css";

const ReadingHeader = ({
  novel,
  currentChapter,
  onSettingsToggle,
  onChapterListToggle,
  onPrevious,
  onNext,
  showSettings,
  showChapterList,
}) => {
  const { isDarkMode, toggleTheme } = useHeaderStore();

  const progress = (currentChapter / novel.totalChapters) * 100;
  const currentChapterData = novel.chapters[currentChapter];

  return (
    <header className={`reading-header ${isDarkMode ? "dark" : "light"}`}>
      <div className="header-container">
        {/* Left Section */}
        <div className="header-left">
          <button className="back-btn" onClick={() => window.history.back()}>
            ← Back
          </button>
          <div className="novel-info">
            <h1 className="novel-title">{novel.title}</h1>
            <span className="novel-author">by {novel.author}</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="header-center">
          <div className="chapter-navigation">
            <button
              className={`nav-btn prev ${
                currentChapter <= 1 ? "disabled" : ""
              }`}
              onClick={onPrevious}
              disabled={currentChapter <= 1}
              title="Previous Chapter"
            >
              ←
            </button>

            <div className="chapter-info">
              <span className="chapter-number">Chapter {currentChapter}</span>
              {currentChapterData?.title && (
                <span className="chapter-title">
                  {currentChapterData.title}
                </span>
              )}
              <div className="progress-container">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">
                  {currentChapter} / {novel.totalChapters} (
                  {Math.round(progress)}%)
                </span>
              </div>
            </div>

            <button
              className={`nav-btn next ${
                currentChapter >= novel.totalChapters ? "disabled" : ""
              }`}
              onClick={onNext}
              disabled={currentChapter >= novel.totalChapters}
              title="Next Chapter"
            >
              →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="header-right">
          <button
            className={`header-btn theme-btn`}
            onClick={toggleTheme}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button
            className={`header-btn ${showChapterList ? "active" : ""}`}
            onClick={onChapterListToggle}
            title="Chapter List"
          >
            📚
          </button>
          <button
            className={`header-btn ${showSettings ? "active" : ""}`}
            onClick={onSettingsToggle}
            title="Reading Settings"
          >
            ⚙️
          </button>
          <button className="header-btn" title="Add Bookmark">
            🔖
          </button>
          <button className="header-btn" title="Share Chapter">
            📤
          </button>
          <div className="header-menu">
            <button className="header-btn menu-btn" title="More Options">
              ⋮
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ReadingHeader;
