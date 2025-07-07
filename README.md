# Novel Bin 📚

A modern, responsive novel reading website built with React, featuring dark/light themes, user authentication, and a comprehensive reading system.

## 🌟 Features

### 🎨 **Theme System**
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- **Custom CSS Variables**: Consistent theming across all components
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🔐 **Authentication System**
- **Login/Register Forms**: Beautiful, animated forms with validation
- **Social Login UI**: Ready-to-integrate social authentication buttons
- **User State Management**: Zustand-powered authentication state with persistence
- **Profile Management**: Complete user profile system with editable information

### 📖 **Reading Experience**
- **Novel Browser**: Grid-based novel discovery with genre filtering
- **Detailed Info Pages**: Comprehensive novel information with ratings and reviews
- **Full Reading System**: Chapter-by-chapter reading with navigation
- **Reading Progress**: Automatic bookmark and progress tracking
- **Reading Settings**: Font size, theme, and layout customization

### 👤 **User Profile**
- **Profile Dashboard**: User statistics, reading history, and bookmarks
- **Reading Statistics**: Books read, current reads, favorites tracking
- **Editable Profile**: In-place editing for user information
- **Library Management**: Personal book collection and favorites

## 🛠️ Tech Stack

- **Frontend**: React 19 with React Router DOM 7
- **State Management**: Zustand with persistence
- **Styling**: Custom CSS with CSS Variables for theming
- **Build Tool**: Vite
- **Linting**: ESLint with React hooks support
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:aunghtet-star/novel_bin.git
   cd novel_bin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── features/                 # Feature-based organization
│   ├── auth/                # Authentication features
│   │   ├── components/      # Login/Register forms
│   │   └── pages/           # Auth pages
│   ├── home/                # Homepage and novel info
│   │   └── pages/           # HomePage, InfoPage
│   ├── profile/             # User profile features
│   │   └── pages/           # ProfilePage
│   ├── public/              # Shared layout components
│   │   ├── components/      # Header, Footer
│   │   └── pages/           # PublicLayout
│   └── reading/             # Reading system
│       ├── components/      # Reading components
│       └── pages/           # ReadingPage
├── routes/                  # Route definitions
├── stores/                  # Zustand state stores
└── styles/                  # Global styles and themes
```

## 🎯 Key Components

### **HomePage** (`src/features/home/pages/HomePage.jsx`)
- Novel grid display with genre filtering
- Search functionality
- Theme-aware design
- Navigation to novel info pages

### **InfoPage** (`src/features/home/pages/InfoPage.jsx`)
- Detailed novel information
- Tabbed interface (Description, Chapters, Reviews)
- Reading progress tracking
- Start/Continue reading functionality

### **ReadingPage** (`src/features/reading/pages/ReadingPage.jsx`)
- Full-screen reading experience
- Chapter navigation
- Reading settings panel
- Progress tracking

### **ProfilePage** (`src/features/profile/pages/ProfilePage.jsx`)
- User profile management
- Reading statistics
- Library and bookmarks
- Editable user information

### **Authentication** (`src/features/auth/`)
- Login and registration forms
- Form validation
- User state management
- Navigation integration

## 🎨 Theming

The application uses CSS variables for consistent theming:

```css
/* Dark Theme */
.dark-theme {
  --bg-color: #0f0f0f;
  --text-primary: #e0e0e0;
  --primary-color: #6366f1;
  /* ... more variables */
}

/* Light Theme */
.light-theme {
  --bg-color: #ffffff;
  --text-primary: #1f2937;
  --primary-color: #6366f1;
  /* ... more variables */
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Flexible Layouts**: CSS Grid and Flexbox
- **Responsive Images**: Proper image handling across devices
- **Touch Friendly**: Large touch targets for mobile users

## 🔄 State Management

Uses Zustand for lightweight state management:

- **Theme Store** (`useHeaderStore`): Theme and UI preferences
- **User Store** (`useUserStore`): Authentication and user data
- **Persistent State**: Automatic localStorage synchronization

## 🎭 Demo Features

- **Demo Login**: Quick testing without backend
- **Sample Data**: Pre-populated novels and user data
- **Mock API**: Simulated API responses for development

## 🚀 Deployment

The project is ready for deployment on platforms like:

- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting option
- **Custom Server**: Node.js/Express integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- React team for the amazing framework
- Zustand for simple state management
- Unsplash for placeholder images
- The open source community

---

**Built with ❤️ by [Aung Htet](https://github.com/aunghtet-star)**

🌟 **Star this repo if you found it helpful!**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
