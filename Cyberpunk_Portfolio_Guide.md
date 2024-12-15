# Cyberpunk Portfolio Website Development Guide

## Project Overview
This guide outlines the steps to build a futuristic cyberpunk portfolio website using Vue.js, Vite, and Bootstrap 5. The website will feature smooth scrolling, light/dark mode toggle, interactive cards, a carousel for projects, and a visually appealing design inspired by cyberpunk aesthetics.

## Project Setup

### 1. Create the Project Directory
- Use Vite to create a new Vue.js project:
  ```bash
  npm create vite@latest portfolio-website-vite -- --template vue
  ```

### 2. Install Dependencies
- Navigate to the project directory and install necessary packages:
  ```bash
  cd portfolio-website-vite
  npm install bootstrap bootstrap-icons aos
  ```

### 3. Project Structure
Ensure the following directory structure:
```
/portfolio-website-vite
  ├── README.md
  ├── index.html
  ├── package.json
  ├── src/
  │   ├── App.vue
  │   ├── assets/
  │   ├── components/
  │   │   ├── Navbar.vue
  │   │   ├── SectionAbout.vue
  │   │   ├── SectionProjects.vue
  │   │   ├── SectionPlayground.vue
  │   │   ├── SectionGallery.vue
  │   │   └── SectionContact.vue
  │   └── main.js
  └── vite.config.js
```

## Component Development

### 1. Navbar Component
- Create `Navbar.vue` for the navigation bar with links to different sections and a light/dark mode toggle.

### 2. Section Components
- Create the following components:
  - `SectionAbout.vue`: About Me section with a description and skills.
  - `SectionProjects.vue`: Projects section with a Bootstrap carousel.
  - `SectionPlayground.vue`: Interactive playground section.
  - `SectionGallery.vue`: Photo gallery section.
  - `SectionContact.vue`: Contact form section.

### 3. Styling
- Use Bootstrap for layout and responsive design.
- Apply custom styles in each component as needed, focusing on neon colors and cyberpunk aesthetics.

## AOS Initialization
- Initialize AOS (Animate On Scroll) in `App.vue`:
  ```javascript
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  onMounted(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  });
  ```

## Running the Development Server
- Start the development server:
  ```bash
  npm run dev
  ```
- Access the website at `http://localhost:5173`.

## Documentation
- Update `README.md` with project details, setup instructions, and feature descriptions.

## Additional Notes

### Image Management
- Ensure all images are stored in the `src/assets/images` directory.
- Use `.webp` format for images when possible to optimize loading times.

### Component Imports
- Use relative paths for importing images in components to avoid resolution issues with Vite.
- Example:
  ```javascript
  import imageName from '../assets/images/image-file.webp';
  ```

### Gallery Enhancements
- Consider implementing a lightbox feature for the gallery section to allow users to view images in full screen.

### Accessibility Improvements
- Ensure all images have descriptive `alt` text for better accessibility.
- Use ARIA roles where necessary to enhance user experience for screen readers.

### Performance Optimization
- Optimize images for web use to improve loading times and performance.
- Consider lazy loading images in the gallery section to enhance initial load performance.

## Notes
- Ensure all components are properly imported in `App.vue`.
- Test each component individually to ensure functionality and responsiveness.
- Consider accessibility improvements and user experience enhancements.

---

This guide serves as a comprehensive reference for building the cyberpunk portfolio website. It covers the setup, structure, and essential components to ensure a smooth development process.
