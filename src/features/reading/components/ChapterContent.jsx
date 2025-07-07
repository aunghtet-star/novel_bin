import React, { useEffect, useRef } from "react";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./ChapterContent.css";

const ChapterContent = ({ chapter, settings }) => {
  const { isDarkMode } = useHeaderStore();
  const contentRef = useRef(null);

  useEffect(() => {
    // Scroll to top when chapter changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [chapter.id]);

  if (!chapter) {
    return (
      <div className="chapter-content loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading chapter...</p>
        </div>
      </div>
    );
  }

  const contentStyle = {
    fontSize: `${settings.fontSize}px`,
    lineHeight: settings.lineHeight,
    fontFamily: settings.fontFamily,
    textAlign: settings.textAlign,
    maxWidth: `${settings.maxWidth}px`,
    backgroundColor:
      settings.backgroundColor !== "default"
        ? settings.backgroundColor
        : undefined,
  };

  return (
    <div
      className={`chapter-content ${isDarkMode ? "dark" : "light"}`}
      ref={contentRef}
    >
      <article className="chapter-article" style={contentStyle}>
        {/* Chapter Header */}
        <header className="chapter-header">
          <h1 className="chapter-title">
            Chapter {chapter.id}: {chapter.title}
          </h1>
          <div className="chapter-meta">
            <span className="publish-date">
              Published: {new Date(chapter.publishDate).toLocaleDateString()}
            </span>
            <span className="word-count">
              {chapter.wordCount?.toLocaleString()} words
            </span>
          </div>
        </header>

        {/* Chapter Content */}
        <div className="chapter-text">
          {chapter.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Chapter Footer */}
        <footer className="chapter-footer">
          <div className="chapter-stats">
            <div className="reading-time">
              <span className="label">Estimated reading time:</span>
              <span className="value">
                {Math.ceil((chapter.wordCount || 0) / 200)} minutes
              </span>
            </div>
          </div>

          <div className="chapter-actions">
            <button className="action-btn like-btn">
              👍 Like ({Math.floor(Math.random() * 500) + 100})
            </button>
            <button className="action-btn comment-btn">
              💬 Comments ({Math.floor(Math.random() * 50) + 10})
            </button>
            <button className="action-btn bookmark-btn">🔖 Bookmark</button>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default ChapterContent;
