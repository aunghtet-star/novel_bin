import React from "react";
import PropTypes from "prop-types";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./ReadingNavigation.css";

const ReadingNavigation = ({
  currentChapter,
  totalChapters,
  onPrevious,
  onNext,
  novel,
}) => {
  const { isDarkMode } = useHeaderStore();

  // Defensive programming - ensure valid values
  const safeCurrentChapter = Math.max(
    1,
    Math.min(currentChapter || 1, totalChapters || 1)
  );
  const safeTotalChapters = totalChapters || 0;

  // Handle loading state
  if (!novel || !safeTotalChapters || safeTotalChapters === 0) {
    return (
      <nav
        className={`reading-navigation ${isDarkMode ? "dark" : "light"}`}
        role="navigation"
        aria-label="Chapter navigation"
      >
        <div className="nav-container loading">
          <div className="loading-message">Loading chapter navigation...</div>
        </div>
      </nav>
    );
  }

  // Now that we know we have valid data, recalculate with proper values
  const finalTotalChapters = Math.max(1, safeTotalChapters);
  const finalCurrentChapter = Math.max(
    1,
    Math.min(safeCurrentChapter, finalTotalChapters)
  );

  const hasPrevious = finalCurrentChapter > 1;
  const hasNext = finalCurrentChapter < finalTotalChapters;

  // Get chapter titles if available with null checks
  const previousChapterNumber = finalCurrentChapter - 1;
  const nextChapterNumber = finalCurrentChapter + 1;
  const previousChapter = novel?.chapters?.[previousChapterNumber];
  const nextChapter = novel?.chapters?.[nextChapterNumber];
  const currentChapterData = novel?.chapters?.[finalCurrentChapter];

  // Safe event handlers
  const handlePreviousClick = () => {
    if (hasPrevious && typeof onPrevious === "function") {
      onPrevious();
    }
  };

  const handleNextClick = () => {
    if (hasNext && typeof onNext === "function") {
      onNext();
    }
  };

  // Calculate reading progress percentage
  const progressPercentage =
    finalTotalChapters > 0
      ? Math.round((finalCurrentChapter / finalTotalChapters) * 100)
      : 0;

  // Ensure minimum 1% display for progress when not at start
  const displayPercentage =
    finalCurrentChapter > 1 && progressPercentage === 0
      ? Math.max(
          1,
          Math.round((finalCurrentChapter / finalTotalChapters) * 100 * 10) / 10
        )
      : progressPercentage;

  return (
    <nav
      className={`reading-navigation ${isDarkMode ? "dark" : "light"}`}
      role="navigation"
      aria-label="Chapter navigation"
    >
      <div className="nav-container">
        {/* Previous Chapter */}
        <button
          className={`nav-btn prev-btn ${!hasPrevious ? "disabled" : ""}`}
          onClick={handlePreviousClick}
          disabled={!hasPrevious}
          aria-label={
            hasPrevious
              ? `Go to previous chapter: ${
                  previousChapter?.title || `Chapter ${previousChapterNumber}`
                }`
              : "No previous chapter"
          }
        >
          <div className="nav-btn-content">
            <span className="nav-icon">←</span>
            <div className="nav-text">
              <span className="nav-label">Previous</span>
              {hasPrevious && (
                <>
                  <span className="nav-chapter">
                    Chapter {previousChapterNumber}
                  </span>
                  {previousChapter?.title && (
                    <span className="nav-chapter-title">
                      {previousChapter.title}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
        </button>

        {/* Chapter Info */}
        <div
          className="current-chapter-info"
          role="status"
          aria-live="polite"
          aria-label={`Currently reading chapter ${finalCurrentChapter} of ${finalTotalChapters}`}
        >
          <span className="current-chapter">Chapter {finalCurrentChapter}</span>
          {currentChapterData?.title && (
            <span className="current-chapter-title">
              {currentChapterData.title}
            </span>
          )}
          <span className="chapter-progress">
            {finalCurrentChapter} of {finalTotalChapters} ({displayPercentage}%
            complete)
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(finalCurrentChapter / finalTotalChapters) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Next Chapter */}
        <button
          className={`nav-btn next-btn ${!hasNext ? "disabled" : ""}`}
          onClick={handleNextClick}
          disabled={!hasNext}
          aria-label={
            hasNext
              ? `Go to next chapter: ${
                  nextChapter?.title || `Chapter ${nextChapterNumber}`
                }`
              : "No next chapter"
          }
        >
          <div className="nav-btn-content">
            <div className="nav-text">
              <span className="nav-label">Next</span>
              {hasNext && (
                <>
                  <span className="nav-chapter">
                    Chapter {nextChapterNumber}
                  </span>
                  {nextChapter?.title && (
                    <span className="nav-chapter-title">
                      {nextChapter.title}
                    </span>
                  )}
                </>
              )}
            </div>
            <span className="nav-icon">→</span>
          </div>
        </button>
      </div>

      {/* Keyboard Shortcuts Info */}
      <div className="shortcuts-info">
        <div className="shortcuts">
          <span className="shortcut">
            <kbd>←</kbd> Previous Chapter
          </span>
          <span className="shortcut">
            <kbd>→</kbd> Next Chapter
          </span>
          <span className="shortcut">
            <kbd>Space</kbd> Scroll Down
          </span>
          <span className="shortcut">
            <kbd>Home</kbd> Top
          </span>
          <span className="shortcut">
            <kbd>End</kbd> Bottom
          </span>
          <span className="shortcut">
            <kbd>Esc</kbd> Close Panels
          </span>
        </div>
      </div>
    </nav>
  );
};

// PropTypes for better type checking
ReadingNavigation.propTypes = {
  currentChapter: PropTypes.number.isRequired,
  totalChapters: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  novel: PropTypes.shape({
    chapters: PropTypes.object,
  }),
};

// Default props
ReadingNavigation.defaultProps = {
  novel: {
    chapters: {},
  },
};

export default ReadingNavigation;
