# Portfolio - Full Stack Developer

A modern, sleek portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and all the sections you need to showcase your work.

## 🚀 Features

- **Modern Design**: Sleek dark theme with gradient accents
- **Smooth Animations**: Powered by Framer Motion for beautiful transitions
- **Responsive**: Works perfectly on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Elements**: Hover effects and animations throughout
- **All Sections**: Home, About, Projects, Experience, Certifications, Leadership, Skills, and Contact

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📝 Customization

### Update Your Information

1. **Home Section** (`src/components/Home.jsx`):
   - Change "Your Name" to your actual name

2. **About Section** (`src/components/About.jsx`):
   - Update the description with your story
   - Replace the emoji with your photo

3. **Projects** (`src/components/Projects.jsx`):
   - Add your actual projects with descriptions
   - Update GitHub and demo links

4. **Experience** (`src/components/Experience.jsx`):
   - Add your work experience and internships

5. **Certifications** (`src/components/Certifications.jsx`):
   - List your certifications

6. **Leadership** (`src/components/Leadership.jsx`):
   - Add your leadership roles

7. **Skills** (`src/components/Skills.jsx`):
   - Update with your actual skills

8. **Contact** (`src/components/Contact.jsx`):
   - Update email and social media links

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: '#6366f1',    // Change to your primary color
  secondary: '#8b5cf6',  // Change to your secondary color
  accent: '#ec4899',     // Change to your accent color
}
```

## 🎨 Sections

- **Home**: Hero section with animated background
- **About**: Personal introduction and story
- **Projects**: Showcase your work with cards
- **Experience**: Timeline of your work experience
- **Certifications**: Display your certifications
- **Leadership**: Highlight leadership roles
- **Skills**: Organized by categories
- **Contact**: Social links and contact information

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
