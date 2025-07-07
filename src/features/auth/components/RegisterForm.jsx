import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useHeaderStore from "../../../stores/useHeaderStore";
import useUserStore from "../../../stores/useUserStore";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useHeaderStore();
  const { login } = useUserStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain uppercase, lowercase, and number";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock user data - in a real app, this would come from the API
      const userData = {
        username: `${formData.firstName.toLowerCase()}${formData.lastName.toLowerCase()}`,
        email: formData.email,
        bio: "A passionate reader exploring new worlds through books.",
        favoriteGenre: "Fantasy",
        joinDate: new Date().toISOString().split("T")[0],
        booksRead: 0,
        currentlyReading: 0,
        favorites: 0,
        totalChapters: 0,
      };

      // Log the user in
      login(userData);

      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ general: "Registration failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`register-form-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="register-form-card">
        <div className="register-header">
          <div className="register-logo">
            <span className="logo-icon">📚</span>
            <h1 className="logo-text">NOVEL BIN</h1>
          </div>
          <h2 className="register-title">Join Our Community</h2>
          <p className="register-subtitle">
            Create your account and start your reading journey
          </p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          {errors.general && (
            <div className="error-message general-error">{errors.general}</div>
          )}

          <div className="name-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`form-input ${errors.firstName ? "error" : ""}`}
                  placeholder="First name"
                  disabled={isLoading}
                />
              </div>
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <div className="input-wrapper">
                <span className="input-icon">👤</span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`form-input ${errors.lastName ? "error" : ""}`}
                  placeholder="Last name"
                  disabled={isLoading}
                />
              </div>
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`form-input ${errors.password ? "error" : ""}`}
                placeholder="Create a strong password"
                disabled={isLoading}
              />
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
            <div className="password-hint">
              Password must be at least 8 characters with uppercase, lowercase,
              and number
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`form-input ${
                  errors.confirmPassword ? "error" : ""
                }`}
                placeholder="Confirm your password"
                disabled={isLoading}
              />
            </div>
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                disabled={isLoading}
              />
              <span className="checkbox-custom"></span>I agree to the{" "}
              <a href="/terms" className="terms-link">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="terms-link">
                Privacy Policy
              </a>
            </label>
            {errors.agreeToTerms && (
              <span className="error-message checkbox-error">
                {errors.agreeToTerms}
              </span>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="subscribeNewsletter"
                checked={formData.subscribeNewsletter}
                onChange={handleChange}
                disabled={isLoading}
              />
              <span className="checkbox-custom"></span>
              Subscribe to our newsletter for new book recommendations
            </label>
          </div>

          <button
            type="submit"
            className={`register-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="register-footer">
          <p className="signin-text">
            Already have an account?{" "}
            <a href="/login" className="signin-link">
              Sign in here
            </a>
          </p>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <div className="social-register">
            <button type="button" className="social-button google">
              <span>🔍</span>
              Google
            </button>
            <button type="button" className="social-button facebook">
              <span>📘</span>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
