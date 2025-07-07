import React from "react";
import useHeaderStore from "../../../stores/useHeaderStore";
import "./ReadingSettings.css";

const ReadingSettings = ({ settings, onChange, onClose }) => {
  const { isDarkMode } = useHeaderStore();

  const fontOptions = [
    { value: "Georgia", label: "Georgia (Serif)" },
    { value: "Arial", label: "Arial (Sans-serif)" },
    { value: "Times New Roman", label: "Times New Roman" },
    { value: "Helvetica", label: "Helvetica" },
    { value: "Verdana", label: "Verdana" },
    { value: "Open Sans", label: "Open Sans" },
  ];

  const backgroundOptions = [
    { value: "default", label: "Default" },
    { value: "#f9f9f9", label: "Light Gray" },
    { value: "#fff9e6", label: "Cream" },
    { value: "#f0f8f0", label: "Light Green" },
    { value: "#1a1a1a", label: "Dark" },
  ];

  const handleChange = (key, value) => {
    onChange({ [key]: value });
  };

  const resetSettings = () => {
    onChange({
      fontSize: 18,
      lineHeight: 1.6,
      fontFamily: "Georgia",
      textAlign: "left",
      maxWidth: 800,
      backgroundColor: "default",
    });
  };

  return (
    <div
      className={`reading-settings ${isDarkMode ? "dark" : "light"} visible`}
    >
      <div className="settings-panel">
        <header className="settings-header">
          <h3>Reading Settings</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </header>

        <div className="settings-content">
          {/* Font Size */}
          <div className="setting-group">
            <label className="setting-label">Font Size</label>
            <div className="font-size-controls">
              <button
                className="size-btn"
                onClick={() =>
                  handleChange("fontSize", Math.max(12, settings.fontSize - 2))
                }
              >
                A-
              </button>
              <span className="size-display">{settings.fontSize}px</span>
              <button
                className="size-btn"
                onClick={() =>
                  handleChange("fontSize", Math.min(28, settings.fontSize + 2))
                }
              >
                A+
              </button>
            </div>
            <input
              type="range"
              min="12"
              max="28"
              step="2"
              value={settings.fontSize}
              onChange={(e) =>
                handleChange("fontSize", parseInt(e.target.value))
              }
              className="slider"
            />
          </div>

          {/* Line Height */}
          <div className="setting-group">
            <label className="setting-label">Line Height</label>
            <input
              type="range"
              min="1.2"
              max="2.5"
              step="0.1"
              value={settings.lineHeight}
              onChange={(e) =>
                handleChange("lineHeight", parseFloat(e.target.value))
              }
              className="slider"
            />
            <span className="setting-value">{settings.lineHeight}</span>
          </div>

          {/* Font Family */}
          <div className="setting-group">
            <label className="setting-label">Font Family</label>
            <select
              value={settings.fontFamily}
              onChange={(e) => handleChange("fontFamily", e.target.value)}
              className="setting-select"
            >
              {fontOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Text Alignment */}
          <div className="setting-group">
            <label className="setting-label">Text Alignment</label>
            <div className="alignment-buttons">
              <button
                className={`align-btn ${
                  settings.textAlign === "left" ? "active" : ""
                }`}
                onClick={() => handleChange("textAlign", "left")}
              >
                ⬅️ Left
              </button>
              <button
                className={`align-btn ${
                  settings.textAlign === "center" ? "active" : ""
                }`}
                onClick={() => handleChange("textAlign", "center")}
              >
                ↔️ Center
              </button>
              <button
                className={`align-btn ${
                  settings.textAlign === "justify" ? "active" : ""
                }`}
                onClick={() => handleChange("textAlign", "justify")}
              >
                ⬌ Justify
              </button>
            </div>
          </div>

          {/* Max Width */}
          <div className="setting-group">
            <label className="setting-label">Reading Width</label>
            <input
              type="range"
              min="600"
              max="1200"
              step="50"
              value={settings.maxWidth}
              onChange={(e) =>
                handleChange("maxWidth", parseInt(e.target.value))
              }
              className="slider"
            />
            <span className="setting-value">{settings.maxWidth}px</span>
          </div>

          {/* Background Color */}
          <div className="setting-group">
            <label className="setting-label">Background</label>
            <div className="background-options">
              {backgroundOptions.map((option) => (
                <button
                  key={option.value}
                  className={`bg-option ${
                    settings.backgroundColor === option.value ? "active" : ""
                  }`}
                  style={{
                    backgroundColor:
                      option.value === "default"
                        ? isDarkMode
                          ? "#1a1a1a"
                          : "#ffffff"
                        : option.value,
                  }}
                  onClick={() => handleChange("backgroundColor", option.value)}
                  title={option.label}
                >
                  {settings.backgroundColor === option.value && "✓"}
                </button>
              ))}
            </div>
          </div>

          {/* Reading Mode Presets */}
          <div className="setting-group">
            <label className="setting-label">Quick Presets</label>
            <div className="preset-buttons">
              <button
                className="preset-btn"
                onClick={() =>
                  onChange({
                    fontSize: 16,
                    lineHeight: 1.5,
                    fontFamily: "Arial",
                    textAlign: "left",
                    maxWidth: 700,
                  })
                }
              >
                📱 Mobile
              </button>
              <button
                className="preset-btn"
                onClick={() =>
                  onChange({
                    fontSize: 18,
                    lineHeight: 1.6,
                    fontFamily: "Georgia",
                    textAlign: "justify",
                    maxWidth: 800,
                  })
                }
              >
                💻 Desktop
              </button>
              <button
                className="preset-btn"
                onClick={() =>
                  onChange({
                    fontSize: 20,
                    lineHeight: 1.8,
                    fontFamily: "Georgia",
                    textAlign: "left",
                    maxWidth: 900,
                  })
                }
              >
                👀 Large Text
              </button>
            </div>
          </div>

          {/* Reset Button */}
          <div className="setting-group">
            <button className="reset-btn" onClick={resetSettings}>
              🔄 Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingSettings;
