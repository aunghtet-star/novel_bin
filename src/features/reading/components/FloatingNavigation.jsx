import React, { useState, useEffect } from "react";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./FloatingNavigation.css";

const FloatingNavigation = ({
  currentChapter,
  totalChapters,
  onPrevious,
  onNext,
  onScrollToTop,
}) => {
  const { isDarkMode } = useHeaderStore();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasPrevious = currentChapter > 1;
  const hasNext = currentChapter < totalChapters;

  return (
    <div
      className={`floating-navigation ${isDarkMode ? "dark" : "light"} ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Scroll Progress */}
      <div className="scroll-progress">
        <div
          className="scroll-progress-fill"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation Controls */}
      <div className="floating-controls">
        {/* Scroll to Top */}
        <button
          className="floating-btn scroll-top-btn"
          onClick={onScrollToTop}
          title="Scroll to Top"
        >
          ↑
        </button>

        {/* Previous Chapter */}
        <button
          className={`floating-btn prev-btn ${!hasPrevious ? "disabled" : ""}`}
          onClick={onPrevious}
          disabled={!hasPrevious}
          title={`Previous Chapter${
            hasPrevious ? ` (${currentChapter - 1})` : ""
          }`}
        >
          ←
        </button>

        {/* Chapter Indicator */}
        <div className="chapter-indicator">
          <span className="chapter-num">{currentChapter}</span>
          <span className="chapter-total">/{totalChapters}</span>
        </div>

        {/* Next Chapter */}
        <button
          className={`floating-btn next-btn ${!hasNext ? "disabled" : ""}`}
          onClick={onNext}
          disabled={!hasNext}
          title={`Next Chapter${hasNext ? ` (${currentChapter + 1})` : ""}`}
        >
          →
        </button>

        {/* Reading Progress */}
        <div className="reading-progress-indicator">
          <div className="progress-circle">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <circle
                className="progress-bg"
                cx="16"
                cy="16"
                r="14"
                strokeWidth="2"
                fill="none"
              />
              <circle
                className="progress-bar"
                cx="16"
                cy="16"
                r="14"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${scrollProgress * 0.88} 88`}
                transform="rotate(-90 16 16)"
              />
            </svg>
            <span className="progress-text">{Math.round(scrollProgress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavigation;
