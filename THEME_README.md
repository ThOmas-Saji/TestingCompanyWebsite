# Theme System Implementation

This project now includes a comprehensive light/dark theme system with the following features:

## Features

1. **Theme Toggle Button**: A button that switches between light and dark modes
   - Shows a sun icon (☀️) for light mode
   - Shows a moon icon (🌙) for dark mode
   - Positioned in the header navigation (both desktop and mobile)

2. **React Context**: Uses `ThemeContext` to manage theme state across the application
   - Provides `theme` (current theme: 'light' | 'dark')
   - Provides `toggleTheme()` function to switch themes

3. **Local Storage Persistence**: Selected theme is automatically saved and restored
   - Theme preference persists across browser refreshes
   - Default theme is "light" if no preference is stored

4. **Automatic Theme Application**: Theme is applied to the document root
   - Adds/removes `light` or `dark` classes to `<html>` element
   - Enables Tailwind CSS dark mode utilities

## Implementation Details

### Files Created/Modified

- **`src/contexts/ThemeContext.tsx`**: Theme context provider and hook
- **`src/components/ui/theme-toggle.tsx`**: Theme toggle button component
- **`src/layouts/Header.tsx`**: Added theme toggle button to navigation
- **`src/App.tsx`**: Wrapped app with ThemeProvider
- **`src/pages/Home/Home.tsx`**: Updated with theme-aware styling
- **`src/layouts/Footer.tsx`**: Updated with theme-aware styling
- **`src/pages/Home/components/Hero.tsx`**: Updated with theme-aware styling
- **`src/index.css`**: Added theme-aware base styles
- **`tailwind.config.js`**: Added `darkMode: 'class'` configuration

### Theme-Aware Styling

The project now uses Tailwind CSS dark mode utilities throughout:

- **Light Theme Colors**:
  - Background: `bg-white`, `bg-gray-50`, `bg-gray-100`
  - Text: `text-gray-900`, `text-gray-600`
  - Borders: `border-gray-200/50`, `border-gray-300/50`

- **Dark Theme Colors**:
  - Background: `dark:bg-zinc-900`
  - Text: `dark:text-white`, `dark:text-zinc-400`
  - Borders: `dark:border-white/8`, `dark:border-white/10`

### Usage

1. **Accessing Theme**: Use the `useTheme()` hook in any component:

   ```tsx
   import { useTheme } from '@/contexts/ThemeContext';

   function MyComponent() {
     const { theme, toggleTheme } = useTheme();
     // theme will be 'light' or 'dark'
   }
   ```

2. **Theme Toggle**: The theme toggle button is automatically available in the header

3. **Styling Components**: Use Tailwind's dark mode utilities:
   ```tsx
   className = 'bg-white dark:bg-zinc-900 text-gray-900 dark:text-white';
   ```

## Browser Support

- Modern browsers with CSS custom properties support
- Local storage for theme persistence
- Smooth transitions between themes

## Future Enhancements

- System theme detection (follows OS preference)
- Additional theme options (e.g., auto, high contrast)
- Theme-specific color palettes
- Animation preferences per theme
