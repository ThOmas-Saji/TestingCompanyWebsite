# YlogX Company Website

A modern, responsive company website for YlogX - an AI and data science consultancy. Built with React 19, TypeScript, Vite, and TailwindCSS, featuring smooth animations, dark/light theme support, and comprehensive AI-focused content.

## 🚀 Features

- **Modern Tech Stack**: React 19 + TypeScript + Vite + TailwindCSS
- **Responsive Design**: Mobile-first approach with Tailwind utility classes
- **Smooth Animations**: Framer Motion for scroll animations and interactions
- **Theme Support**: Dark/Light mode toggle with persistent preferences
- **Component Library**: Reusable UI components with consistent styling
- **Routing**: React Router for navigation between pages
- **Contact Integration**: EmailJS integration for contact form submissions
- **Analytics**: Microsoft Clarity integration for user analytics
- **Performance**: Optimized with Vite for fast development and builds

## 📁 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── animations/          # Animation components
│   │   ├── Card3DTilt.tsx  # 3D card tilt effect
│   │   ├── Reveal.tsx      # Text reveal animation
│   │   └── ScrollReveal.tsx # Scroll-triggered animations
│   ├── icons-component/    # Custom icon components
│   │   ├── ArrowIcon.tsx
│   │   ├── LeftRightArrowIcon.tsx
│   │   └── PeopleIcon.tsx
│   └── ui/                 # Core UI components
│       ├── button.tsx      # Button component with variants
│       ├── contact-form.tsx # Contact form with EmailJS
│       ├── input.tsx       # Input component
│       ├── modal.tsx       # Modal component
│       └── theme-toggle.tsx # Dark/Light theme toggle
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Theme management
├── hooks/                  # Custom React hooks
│   └── useIsMobile.ts      # Mobile detection hook
├── layouts/                # Layout components
│   ├── Header.tsx          # Navigation header
│   └── Footer.tsx          # Footer with contact info
├── lib/                    # Utility libraries
│   ├── crypto.ts           # Cryptographic utilities
│   ├── emailjs.ts          # EmailJS integration
│   └── utils.ts            # General utilities
├── pages/                  # Page components
│   ├── Home/               # Home page sections
│   │   ├── components/     # Home page components
│   │   │   ├── AIFlowchart.tsx    # AI workflow visualization
│   │   │   ├── CaseStudies.tsx   # Case studies section
│   │   │   ├── CTA.tsx           # Call-to-action section
│   │   │   ├── FAQ.tsx           # FAQ accordion
│   │   │   ├── Features.tsx      # Features showcase
│   │   │   ├── Hero.tsx          # Hero section with animations
│   │   │   ├── Services.tsx      # Services overview
│   │   │   ├── Team.tsx          # Team members
│   │   │   └── WorkProcess.tsx   # Work process steps
│   │   └── Home.tsx        # Main home page
│   └── Blog/               # Blog functionality
│       ├── blogs/          # Blog listing page
│       └── index.tsx       # Blog preview component
├── App.tsx                 # Main app with routing
└── main.tsx               # App entry point
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd TestingCompanyWebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CLARITY_ID=your_clarity_id
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

## 🎨 Key Components

### Hero Section

- Animated text rotation showcasing AI capabilities
- Gradient backgrounds with theme support
- Floating decorative elements
- Call-to-action buttons with smooth scrolling

### AI Flowchart

- Interactive workflow visualization
- Three-column layout: Strategic Partnership → Bespoke Development → Business Impact
- Custom SVG icons and progress cards
- Responsive design with mobile optimization

### Services Section

- Clean list layout with hover effects
- Four main service categories: Generative AI, Data Science & ML, Data Engineering, AI Consulting
- Smooth transitions and animations

### Blog Integration

- RSS feed integration with Medium
- Dynamic blog post fetching
- Fallback content for offline scenarios
- Category-based filtering

### Contact Form

- EmailJS integration for form submissions
- Real-time validation and status feedback
- Modal integration for seamless UX
- Success/error state handling

## 🎭 Animations & Interactions

- **Scroll Animations**: Elements fade in as they come into view using Framer Motion
- **Hover Effects**: Smooth transitions on interactive elements
- **Theme Transitions**: Smooth color transitions when switching themes
- **Loading States**: Form submission and loading indicators
- **3D Effects**: Card tilt animations and floating elements

## 🎨 Design System

### Colors

- **Primary**: Emerald (#10b981) and Purple (#8b5cf6) gradients
- **Dark Mode**: Zinc/slate color palette
- **Light Mode**: Gray/white color palette
- **Accent**: Emerald for CTAs and highlights

### Typography

- **Font**: Inter (Google Fonts)
- **Scale**: Responsive typography with Tailwind classes
- **Hierarchy**: Clear heading and text hierarchy

### Spacing

- **Consistent**: 4px base unit system
- **Responsive**: Adaptive spacing for different screen sizes
- **Components**: Predefined spacing classes

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Responsive grid layouts
- **Navigation**: Mobile-friendly sidebar navigation

## 🚀 Performance Features

- **Vite**: Fast development and build times
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: WebP format for better compression
- **Lazy Loading**: Components load as needed
- **Memoization**: React.memo for performance optimization

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run commit` - Interactive commit with Commitizen

### Code Quality

- **ESLint**: Code linting and error detection
- **Prettier**: Code formatting
- **TypeScript**: Type safety and better development experience
- **Husky**: Git hooks for code quality
- **Commitizen**: Conventional commit messages
- **Lint-staged**: Pre-commit linting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`npm run commit`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact:

- Email: vivek@ylogx.io, ganapathy@ylogx.io
- Website: https://ylogx.io

---

Built with ❤️ by the YlogX team
